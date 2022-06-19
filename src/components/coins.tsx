import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCoins } from "@utils/api";
import RingLoader from "react-spinners/RingLoader";

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

const Coins = () => {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  console.log("data7879: ", data);

  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <title>코인</title>
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
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
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
