import { useEffect } from "react";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
import {
  useNavigate,
  useLocation,
  useParams,
  Link,
  Outlet,
} from "react-router-dom";
import { fetchCoinInfo, fetchCoinTickers } from "@utils/api";
import {
  Title,
  Loader,
  Container,
  Header,
  Overview,
  OverviewItem,
  Description,
  Tab,
  Tabs,
  Button,
} from "@components/styledComponents/coin";
import { RouteParams, RouteState, InfoData, PriceData } from "@models/coin";
import { RingLoader } from "react-spinners";
import MemoForm from "@components/memoForm";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { currentCoinPage, getOneCoinMemos } from "@atoms/memosAtom";

const Coin = () => {
  const navigate = useNavigate();
  const setCurrentCoinName = useSetRecoilState(currentCoinPage);
  const { coinId } = useParams() as RouteParams; // V6 는 useParams 의 타입이 string | undefined 인지 알아서 체크해준다.
  const { state, pathname } = useLocation() as RouteState;
  console.log("pathname: ", pathname);
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["infos", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );
  const loading = infoLoading || tickersLoading;

  // useEffect for setCuurentCoinPage (메모에 입력한 코인 만 불러오기 위함..)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    if (infoData) {
      setCurrentCoinName(infoData?.name);
    }
  }, [infoData]);

  const onClicktoList = () => {
    navigate("/");
  };

  return (
    <>
      <Container>
        <Helmet>
          <title>
            {state?.name
              ? state.name
              : loading
              ? "Loading... "
              : infoData?.name}
          </title>
        </Helmet>
        <Header>
          <Button onClick={onClicktoList}>뒤로가기</Button>
          <Title>
            {state?.name
              ? state.name
              : loading
              ? "Loading... "
              : infoData?.name}
          </Title>
        </Header>
        {loading ? (
          <Loader>
            <RingLoader />
          </Loader>
        ) : (
          <>
            <Overview>
              <OverviewItem>
                <span>Rank:</span>
                <span>{infoData?.rank}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Symbol:</span>
                <span>{`${infoData?.symbol}`}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Price:</span>
                <span>${tickersData?.quotes.USD.price.toFixed(3)}</span>
              </OverviewItem>
            </Overview>
            <Description>{infoData?.description}</Description>
            <Overview>
              <OverviewItem>
                <span>Total Suply:</span>
                <span>{tickersData?.max_supply}</span>
              </OverviewItem>
            </Overview>

            <Tabs>
              <Tab isActive={pathname === `/${coinId}/chart`}>
                <Link to={`/${coinId}/chart`}>Chart</Link>
              </Tab>
              <Tab isActive={pathname === `/${coinId}/price`}>
                <Link to={`/${coinId}/price`}>Price</Link>
              </Tab>
            </Tabs>
            <Outlet />
            {infoData && <MemoForm coinName={infoData?.name} />}
          </>
        )}
      </Container>
    </>
  );
};

export default Coin;
