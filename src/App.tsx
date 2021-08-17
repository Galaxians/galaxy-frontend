import React, { useEffect, lazy, useState } from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import { ResetCSS } from "glx-uikit";
import BigNumber from "bignumber.js";
import styled from "styled-components";
import useEagerConnect from "hooks/useEagerConnect";

import Navbar from "pagecomponent/Navbar";
// @ts-ignore
import Leftnav from "pagecomponent/Leftnav";
// @ts-ignore
import Footer from "pagecomponent/Footer";

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
import Sidebar from "./pagecomponent/Sidebar";


const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
      width,
      height,
  };
}
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
      function handleResize() {
          setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

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

  const screenWidth = useWindowDimensions().width;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if(screenWidth > 950) setIsMobile(false)
    else setIsMobile(true)
    // screenWidth > 950 ? setIsMobile(false) : setIsMobile(true)
}, [screenWidth]);


  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Navbar  toggle={toggle} />
      <Sidebar  isOpen={isOpen} toggle={toggle} />
      {/* <div className="row m-0" style={{width:'100%'}}> */}
        {/* <div className="col-auto">
          <Leftnav />
        </div> */}
        <Wrapper>
          {/* <Menu> */}
          <SuspenseWithChunkError fallback={<PageLoader />}>
            <Switch>
              <Route path="/" exact>
                <Home isMobile={isMobile}/>
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
        </Wrapper>
      {/* </div> */}
      {/* </Menu> */}
      <Footer />
      <EasterEgg iterations={2} />
      <ToastListener />
      <GlobalCheckBullHiccupClaimStatus />
    </Router>
  );
};

export default React.memo(App);
