import React, { useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCoins } from "@utils/api";
import RingLoader from "react-spinners/RingLoader";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isDartAtom } from "@atoms/colorAtoms";
import { coinListState, currentCoinPage } from "@atoms/memosAtom";
import DarkModeToggle from "react-dark-mode-toggle";

import { ICoin } from "@models/coins";
import {
  Container,
  Header,
  CoinsList,
  Coin,
  Title,
  Loader,
  Img,
} from "@components/styledComponents/coins";
import { useNavigate } from "react-router-dom";

const Coins = () => {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  console.log("data7879: ", data);
  const [darkAtom, setDarkAtom] = useRecoilState(isDartAtom);
  const setCoinNameList = useSetRecoilState(coinListState);
  const setCurrentCoinPage = useSetRecoilState(currentCoinPage);
  const navigate = useNavigate();

  // 코인 이름 리스트 100개만 recoil의 coinListState에 저장
  useEffect(() => {
    if (data) {
      setCoinNameList(data.slice(0, 100).map((item) => item.name));
      // 현재 페이지 null 처리를 위한 setCurrentCoinPage
      setCurrentCoinPage(null);
    }
  }, [data]);

  const toggleDarkAtom = useCallback(() => setDarkAtom((prev) => !prev), []);

  const moveToMemos = () => {
    navigate("/memos");
  };

  // 이미지 에러시 다른 이미지 대체함수
  const handleImgTagError = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      event.currentTarget.src =
        // "https://www.kindacode.com/wp-content/uploads/2021/08/oops.png";
        `${process.env.PUBLIC_URL + "/icons/_con.png"}`;
    },
    []
  );

  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <title>코인</title>
        {/* <button onClick={toggleDarkAtom}>Toggle Mode</button> */}
        <DarkModeToggle
          onChange={toggleDarkAtom}
          checked={darkAtom}
          size={80}
        />
        <button onClick={moveToMemos}>메모로 이동</button>
      </Header>
      {isLoading ? (
        <Loader>
          <RingLoader />
        </Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                }}
                state={{ name: coin.name }}
              >
                <Img
                  src={`${
                    process.env.PUBLIC_URL
                  }/icons/${coin.symbol.toLowerCase()}.png`}
                  onError={handleImgTagError}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
};

export default Coins;
