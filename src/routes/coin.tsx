import { RouteParams } from "@models/coin";
import { lazy, Suspense } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

const CoinComponent = lazy(() => import("@components/coin"));
const PriceComponent = lazy(() => import("@components/Price"));
const ChartComponent = lazy(() => import("@components/chart"));

const Coin = () => {
  const { coinId } = useParams() as RouteParams;
  console.log("route coinId: ", coinId);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<RingLoader size={100} />}>
            <CoinComponent />
          </Suspense>
        }
      >
        <Route
          path="/price"
          element={
            <Suspense fallback={<RingLoader />}>
              {coinId && <PriceComponent coinId={coinId} />}
            </Suspense>
          }
        />
        <Route
          path="/chart"
          element={
            <Suspense fallback={<RingLoader />}>
              {coinId && <ChartComponent coinId={coinId} />}
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default Coin;
