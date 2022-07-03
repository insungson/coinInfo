import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import RouteCoin from "@routes/coin";

const Coins = lazy(() => import("@components/coins"));
const Memos = lazy(() => import("@components/memos"));

const Router = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/:coinId/*" element={<RouteCoin />} />
          <Route
            path="/memos"
            element={
              <Suspense fallback={<RingLoader size={20} />}>
                <Memos />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={<RingLoader size={20} />}>
                <Coins />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
