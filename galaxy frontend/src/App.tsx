import React, { useEffect, lazy } from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import { ResetCSS } from "glx-uikit";
import BigNumber from "bignumber.js";
import useEagerConnect from "hooks/useEagerConnect";

import Navbar from 'pagecomponent/Navbar'
// @ts-ignore
import Leftnav from 'pagecomponent/Leftnav'
// @ts-ignore
import Footer from 'pagecomponent/Footer'

import {
  useFetchPriceList,
  useFetchProfile,
  useFetchPublicData,
} from "state/hooks";
import useGetDocumentTitlePrice from "./hooks/useGetDocumentTitlePrice";
import GlobalStyle from "./style/Global";
import Menu from "./components/Menu";
import SuspenseWithChunkError from "./components/SuspenseWithChunkError";
import ToastListener from "./components/ToastListener";
import PageLoader from "./components/PageLoader";
import EasterEgg from "./components/EasterEgg";
import Pools from "./views/Pools";
import GlobalCheckBullHiccupClaimStatus from "./views/Collectibles/components/GlobalCheckBullHiccupClaimStatus";
import history from "./routerHistory";

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import("./views/Home"));
const Farms = lazy(() => import("./views/Farms"));
const FarmsPools = lazy(() => import("./views/FarmsPools"));
const Lottery = lazy(() => import("./views/Lottery"));
const Ifos = lazy(() => import("./views/Ifos"));
const NotFound = lazy(() => import("./views/NotFound"));
const Collectibles = lazy(() => import("./views/Collectibles"));
const Teams = lazy(() => import("./views/Teams"));
const Team = lazy(() => import("./views/Teams/Team"));
const Profile = lazy(() => import("./views/Profile"));

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

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Navbar />
      <div className="row">
                <div className="col-auto">
              <Leftnav/>
              </div>
              <div className="col-auto justify-content-center text-center" style={{marginTop:'20px'}}>
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
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
        </div>
        </div>
      {/* </Menu> */}
      <Footer />
      <EasterEgg iterations={2} />
      <ToastListener />
      <GlobalCheckBullHiccupClaimStatus />
    </Router>
  );
};

export default React.memo(App);
