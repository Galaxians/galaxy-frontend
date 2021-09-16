import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div<{ isOpen: any }>`
  position: absolute;
  z-index: 998;
  top: 92px;
  left: 0px;
  width: 250px;
  height: calc(100% - 92px);
  cursor: pointer;
  background: rgb(52, 0, 72);
  padding: 5px;
  * {
    font-family: "Mosk";
  }
  transition: 0.3s ease-in-out;
  left: ${({ isOpen }) => (isOpen ? "-250px" : "0px")};
  > div:last-of-type {
    transform: ${({ isOpen }) =>
      isOpen ? "rotateY(180deg)" : "rotateY(0deg)"};
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;

export default function LeftSidebar({ isOpen, toggle }) {
  const btnclick = () => {
    // console.log('haha');
  };

  const history = useHistory();
  const path = history.location.pathname;

  // if(path !== "/swap" && path !=="/pool" && path !== "/add/BNB" && path !=='/find')   return (<></>)

  return (
    <SidebarContainer isOpen={isOpen}>
      <div
        style={{
          color: "rgb(201, 187, 206)",
          height: "150px",
          border: "1px solid #FF00FF",
          borderRadius: "5px ",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ color: "#FF00FF", fontSize: "22px", fontWeight: 900 }}>
          GLX Stats
        </div>
        <div style={{ display: "flex", fontSize: "14px" }}>
          <div style={{ width: "120px" }}>Total GLX Supply</div>
          <div>100,1000,000</div>
        </div>
        <div style={{ display: "flex", fontSize: "14px" }}>
          <div style={{ width: "120px" }}>Total GLX Burned</div>
          <div>0</div>
        </div>
        <div style={{ display: "flex", fontSize: "14px" }}>
          <div style={{ width: "120px" }}>Total GLX/ Block</div>
          <div>25</div>
        </div>
      </div>

      <div
        style={{
          height: "120px",
          border: "1px solid #FF00FF",
          borderRadius: "5px ",
          padding: "15px",
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ color: "#FF00FF", fontSize: "22px", fontWeight: 800 }}>
          Total Value Locked
        </div>
        <div style={{ color: "white", fontSize: "29px", fontWeight: 600 }}>
          2648710.50
        </div>
        <div style={{ color: "rgb(201, 187, 206)", fontSize: "14px" }}>
          Across all LPs and Galactic Pools
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          height: "70px",
          backgroundColor: "rgb(0, 0, 0)",
          color: "white",
          opacity: "0.43",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {/* Ad Space 303 * 99 */}
      </div>

      <div
        style={{
          marginTop: "300px",
          height: "120px",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ color: "white", fontSize: "22px", display: "flex" }}>
          <img
            src="/assets/img/Galaxia-token-color-250px.png"
            alt="Galaxy Swap"
            style={{ width: "24px" }}
          />
          <div style={{ marginLeft: "12px", fontFamily: "monospace" }}>
            $ 0,063
          </div>
        </div>
        <div
          style={{
            color: "rgb(201, 187, 206)",
            display: "flex",
            alignItems: "center",
            marginTop: "16px",
          }}
        >
          <img
            src="/assets/img/bscscan-icon.svg"
            alt="bscscan"
            style={{ width: "24px" }}
          />
          <div style={{ fontSize: "12px" }}>GALAXIA Transactions</div>
        </div>
        <div
          style={{
            color: "rgb(201, 187, 206)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/assets/img/bscscan-icon.svg"
            alt="bscscan"
            style={{ width: "24px" }}
          />
          <div style={{ fontSize: "12px" }}>GALAXIA Contracts</div>
        </div>
        <div
          style={{
            color: "rgb(201, 187, 206)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/assets/img/bscscan-icon.svg"
            alt="bscscan"
            style={{ width: "24px" }}
          />
          <div style={{ fontSize: "12px" }}>GALAXIA Holders</div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 20,
          left: 250,
          width: "28px",
          height: "28px",
          cursor: "pointer",
        }}
        onClick={() => toggle()}
        onKeyDown={() => btnclick()}
        role="button"
        tabIndex={0}
      >
        <img src="/assets/img/left.png" alt="left" style={{ width: "28px" }} />
      </div>
    </SidebarContainer>
  );
}
