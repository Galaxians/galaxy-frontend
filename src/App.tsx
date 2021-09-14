import React, { useEffect, lazy, useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ResetCSS } from "glx-uikit";
import BigNumber from "bignumber.js";
import styled from "styled-components";
import useEagerConnect from "./hooks/useEagerConnect";

// @ts-ignore
import Footer from "./pagecomponent/Footer";

import {
  useFetchPriceList,
  useFetchProfile,
  useFetchPublicData,
} from "./state/hooks";
import Navbar from "./pagecomponent/Navbar";
import useGetDocumentTitlePrice from "./hooks/useGetDocumentTitlePrice";
import GlobalStyle from "./style/Global";
import SuspenseWithChunkError from "./components/SuspenseWithChunkError";
import ToastListener from "./components/ToastListener";
import PageLoader from "./components/PageLoader";
import EasterEgg from "./components/EasterEgg";
import GlobalCheckBullHiccupClaimStatus from "./views/Collectibles/components/GlobalCheckBullHiccupClaimStatus";
import history from "./routerHistory";
import Sidebar from "./pagecomponent/Sidebar";

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import("./views/Home"));
const Farms = lazy(() => import("./views/Farms"));
const FarmsPools = lazy(() => import("./views/FarmsPools"));
const Ifos = lazy(() => import("./views/Ifos"));
const NotFound = lazy(() => import("./views/NotFound"));
const LaunchPad = lazy(() => import("./views/LaunchPad"));
const Swap = lazy(() => import("./views/Swap"));
const Pool = lazy(() => import("./views/Pool"));
const AddLiquidity = lazy(() => import("./views/AddLiquidity"));
const RedirectOldAddLiquidityPathStructure = lazy(
  () => import("./views/AddLiquidity/RedirectOldAddLiquidityPathStructure")
);
const RedirectionDuplicateTokenIds = lazy(
  () => import("./views/AddLiquidity/RedirectionDuplicateTokenIds")
);
const RemoveLiquidity = lazy(() => import("./views/RemoveLiquidity"));
const RedirectOldRemoveLiquidityPathStructure = lazy(
  () => import("./views/RemoveLiquidity/redirects")
);

const Wrapper = styled.div`
  margin-top: 20px;
  margin: auto;
`;

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

const App: React.FC = () => {
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  useEffect(() => {
    console.warn = () => null;
  }, []);

  useEagerConnect();
  useFetchPublicData();
  useFetchProfile();
  useFetchPriceList();
  useGetDocumentTitlePrice();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {/* <div className="row m-0" style={{width:'100%'}}> */}
      {/* <div className="col-auto">
          <Leftnav />
        </div> */}
      <Wrapper>
        {/* <Menu> */}
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/pools">
              <FarmsPools />
            </Route>
            <Route path="/ifo">
              <Ifos />
            </Route>
            <Route path="/launchpad">
              <LaunchPad />
            </Route>
            <Route path="/exchange">
              <Swap />
            </Route>
            <Route path="/pool">
              <Pool />
            </Route>
            <Route exact path="/add">
              <AddLiquidity />
            </Route>
            <Route exact path="/add/:currencyIdA">
              <RedirectOldAddLiquidityPathStructure />
            </Route>
            <Route exact path="/add/:currencyIdA/:currencyIdB">
              <RedirectionDuplicateTokenIds />
            </Route>
            <Route exact strict path="/remove/:currencyIdA/:currencyIdB">
              <RemoveLiquidity />
            </Route>
            <Route exact strict path="/remove/:tokens">
              <RedirectOldRemoveLiquidityPathStructure />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
      </Wrapper>
      {/* </div> */}
      {/* </Menu> */}
      <div className="mobile_ghost" />
      <Footer />
      <EasterEgg iterations={2} />
      <ToastListener />
      <GlobalCheckBullHiccupClaimStatus />
    </Router>
  );
};

export default React.memo(App);
