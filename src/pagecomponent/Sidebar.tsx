import React, { useState } from "react";
import styled from "styled-components";

export const SidebarContainer = styled.aside<{ isOpen: any }>`
  position: fixed;
  z-index: 998;
  color: white;
  width: 60%;
  height: 100%;
  background: transparent linear-gradient(90deg, #000000 0%, #0b001e 100%) 0% 0%
    no-repeat padding-box;
  cursor: pointer;
  align-items: center;
  top: 0;
  left: 0;
  transition: 1s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0%" : "-100%")};
`;

const BtnDiv = styled.div`
  border: 1px solid #ff1fff;
  border-radius: 8px;
  opacity: 1;
  width: 140px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  margin: 10px 0px;
  > span {
    z-index: 1;
  }
  > div {
    transition: 0.3s;
    width: 0%;
    border-radius: 8px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent linear-gradient(90deg, #ff1fff 0%, #440c8b 100%) 0%
      0% no-repeat padding-box;
  }
  &:hover {
    > div {
      background: transparent linear-gradient(90deg, #ff1fff 0%, #440c8b 100%)
        0% 0% no-repeat padding-box;
      width: 100%;
    }
  }
`;

const BtnImg = styled.div`
  position: relative;
  width: 120px;
  padding: 10px;
  display: flex;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  margin-bottom: 25px;
  > img {
    width: 90px;
  }
  > span {
    position: absolute;
    font-size: 12px;
    right: 0px;
    top: 10px;
  }
  &:hover {
    transition: 0.5s;
    border: 1px solid #ff1fff;
    border-radius: 8px;
    background: rgb(23, 13, 41);
  }
`;
const Btn = ({ text }) => {
  return (
    <BtnDiv>
      <span>{text}</span>
      <div />
    </BtnDiv>
  );
};

export default function Sidebar({ isOpen, toggle }) {
  const [isTag, setIsTag] = useState(false);
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <img
        src="./assets/img/menu.png"
        alt="menu"
        style={{ marginTop: "50px", marginLeft: "25px" }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "100px",
          flexDirection: "column",
          height: "60%",
        }}
      >
        <img
          src="./assets/img/Icon-galaxyswap.png"
          alt="icon"
          style={{ width: "25px", marginBottom: "20px" }}
        />
        <Btn text="EXCHANGE" />
        <Btn text="FARMS" />
        <Btn text="POOL" />
        <Btn text="LAUNCHPAD" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BtnImg>
          <img src="./assets/img/Kal-with-tongue-out.png" alt="tongue" />
          <span>Need Help?</span>
        </BtnImg>
        <div
          style={{ width: "80%", height: "0px", border: "1px solid #FF1FFF" }}
        />
        <div
          style={{ marginTop: "25px", display: "flex", alignItems: "center" }}
        >
          <img
            src="./assets/img/Galaxia-token-color-250px.png"
            alt="galaxy"
            style={{ width: "25px", marginRight: "10px" }}
          />
          $ 0,063
        </div>
      </div>
    </SidebarContainer>
  );
}
