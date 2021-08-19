import React, { useContext, useState } from "react";
import { Button, useWalletModal as UikitMenu } from "glx-uikit";
import { useHistory, Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import styled, { css } from "styled-components";
import { BASE_EXCHANGE_URL } from "config";

export const StyledLink = styled(Link)`
  margin-left: 25px;
  border: 1px solid #ff1fff;
  width: 120px;
  text-align: center;
  border-radius: 10px;
  color: gray;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  height: 44px;
  width: 146px;
  > span {
    font-size: 15px;
    font-family: monospace;
    z-index: 1;
  }
  > div {
    transition: 1s;
    width: 0%;
  }
  &:hover {
    color: white !important;
    > div {
      background: transparent linear-gradient(90deg, #ff1fff 0%, #440c8b 100%)
        0% 0% no-repeat padding-box;
      width: 100%;
    }
  }
`;
export const StyledA = styled.a`
  margin-left: 25px;
  border: 1px solid #FF1FFF;
  text-align: center;
  border-radius: 10px;
  color: gray;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  height: 44px;
  width: 146px;
  >span {
    font-size: 15px;
    font-family: monospace;
    z-index: 1;
  }
  >div {
    transition: 1s;
    width: 0%;
  }
  &:hover {
    color: white !important;
    >div {
      background: transparent linear-gradient(90deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
      width: 100%;
    }
  }
`

const StyledButton = styled.button`
  margin-left: 25px;
  border: 1px solid #FF1FFF;
  text-align: center;
  border-radius: 10px;
  color: gray;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  height: 44px;
  width: 146px;
  > span {
    font-size: 15px;
    font-family: monospace;
    z-index: 1;
  }
  > div {
    transition: 1s;
    width: 0%;
  }
  &:hover {
    color: white !important;
    > div {
      background: transparent linear-gradient(90deg, #ff1fff 0%, #440c8b 100%)
        0% 0% no-repeat padding-box;
      width: 100%;
    }
  }
`;

export default function Navbar({ toggle }) {
  const { account, activate, deactivate } = useWeb3React();
  const { login, logout } = useAuth();
  const [current, setCurrent] = useState("");
  //   const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  //   const { isDark, toggleTheme } = useTheme()
  //   const priceData = useGetPriceData()
  //   const cakePriceUsd = priceData ? Number(priceData.prices.Cake) : undefined
  //   const profile = useGetLocalProfile()

  const { onPresentConnectModal, onPresentAccountModal } = UikitMenu(
    login,
    deactivate,
    account as string
  );
  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;
  const history = useHistory();

  return (
    <div className="container-fluid top-nav-bg">
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container-fluid">
          <div style={{ display: "flex" }}>
            <button
              type="submit"
              data-bs-toggle="collapse"
              className="navbar-toggler"
              data-bs-target="/navcol-1"
              style={{
                marginTop: "0px",
                marginLeft: "-15px",
                alignSelf: "center",
                border: "unset",
              }}
              onClick={toggle}
            >
              <span className="visually-hidden">Toggle navigation</span>
              {/* <span className="navbar-toggler-icon text-white" /> */}
              <div
                className="toggle-icon"
                style={{ backgroundColor: "#FE1EF9" }}
              />
            </button>
            <a className="navbar-brand" href={window.origin}>
              <img
                src="./assets/img/galaxyswap-logo-color-800px.png"
                alt="Galaxy Swap"
                style={{ width: "180px", marginLeft: "30px" }}
              />
            </a>
            <a className="navbar-icon" href={window.origin}>
              <img
                src="./assets/img/Icon-galaxyswap-192x192.png"
                alt="Galaxy Swap"
                style={{ marginLeft: "5px", width: "50px" }}
              />
            </a>
          </div>

          <div className="nav-btn-show">
            <span className="navbar-text actions">
              <div>
                {account ? (
                  <StyledButton
                  className="btn text-white xrounded "
                  style={{height: '25px', fontSize:'12px'}}
                    onClick={() => {
                      onPresentAccountModal();
                    }}
                  >
                    <span>{accountEllipsis}</span>
                    <div style={{position:'absolute',top:0,left:0,height:'100%', borderRadius: '10px'}} />
                  </StyledButton>
                ) : (
                  <StyledButton
                  className="btn text-white xrounded"
                  style={{height: '25px', fontSize:'12px'}}
                    onClick={() => {
                      onPresentConnectModal();
                    }}
                  >
                    <span>Connect</span>
                    <div style={{position:'absolute',top:0,left:0,height:'100%', borderRadius: '10px'}} />
                  </StyledButton>
                )}
              </div>
            </span>
            <img
              src="./assets/img/alien-kal-avatar.png"
              alt="profile"
              style={{
                marginLeft: "11px",
                width: "25px",
                marginTop: "7px",
                height: "25px",
              }}
            />
          </div>
          <div className="collapse navbar-collapse" id="navcol-1">
            {/* <span className="pink-color small mt-2">Powered by GalaxyProtocol</span> */}
            <ul
              className="navbar-nav"
              style={{ flex: 1, justifyContent: "center" }}
            >
              <li className="nav-item" style={{ display: "inline-flex" }}>
                <StyledA
                  href={BASE_EXCHANGE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Exchange</span>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </StyledA>
                <StyledLink
                  to="/farms"
                  rel="noreferrer"
                  onClick={() => setCurrent("farms")}
                  style={
                    current === "farms"
                      ? {
                          background:
                            "transparent linear-gradient(90deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box",
                        }
                      : {}
                  }
                >
                  <span>FARMS</span>
                  {current !== "farms" && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                </StyledLink>
                <StyledLink
                  to="/pools"
                  rel="noreferrer"
                  onClick={() => setCurrent("pools")}
                  style={
                    current === "pools"
                      ? {
                          background:
                            "transparent linear-gradient(90deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box",
                        }
                      : {}
                  }
                >
                  <span>POOL</span>
                  {current !== "pools" && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                </StyledLink>
                <StyledA
                  href="https://galaxyprotocol.io/#/buyback"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>LANCHPAD</span>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </StyledA>
              </li>
            </ul>
            <span className="navbar-text actions ms-auto">
              <div>
                {account ? (
                  <StyledButton
                  className="btn text-white xrounded"
                  style={{marginRight:'10px', marginLeft:'10px',  height: '46px', width:'146px'}}
                    onClick={() => {
                      onPresentAccountModal()
                    }}
                  >
                    <span>{accountEllipsis}</span>
                    <div style={{position:'absolute',top:0,left:0,height:'100%', borderRadius: '10px'}} />
                  </StyledButton>
                ) : (
                  <StyledButton
                  className="btn text-white xrounded "
                  style={{marginRight:'10px', marginLeft:'10px', fontWeight: 800, height: '46px', width:'146px'}}
                    onClick={() => {
                      onPresentConnectModal()
                    }}
                  >
                    <span>Connect</span>
                    <div style={{position:'absolute',top:0,left:0,height:'100%', borderRadius: '10px'}} />
                  </StyledButton>
                )}
              </div>
            </span>
            <img src="./assets/img/alien-kal-avatar.png" alt="profile" style={{width:'40px'}} />
          </div>
        </div>
      </nav>
    </div>
  );
}
