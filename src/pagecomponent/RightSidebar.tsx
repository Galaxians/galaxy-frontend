import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div<{ isOpen: any }>`
  position: absolute;
  z-index: 998;
  top: 0px;
  right: 0px;
  width: 250px;
  height: 100%;
  cursor: pointer;
  background: rgb(52, 0, 72);
  padding: 5px;
  * {
    font-family: "Mosk";
  }
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0px" : "-250px")};
  > div:last-of-type {
    transform: ${({ isOpen }) =>
      isOpen ? "rotateY(0deg)" : "rotateY(180deg)"};
  }
  @media (max-width: 991px) {
    display: none;
  }
`;

export default function RightSidebar({ isOpen, toggle }) {
  const btnclick = () => {
    // console.log('haha');
  };

  const history = useHistory();
  const path = history.location.pathname;

  if (path !== "/swap" && path !== "/pool") return <></>;

  return (
    <SidebarContainer isOpen={isOpen}>
      <div
        style={{
          position: "relative",
          marginTop: "30px",
          height: "70px",
          backgroundColor: "rgb(0, 0, 0)",
          color: "white",
          opacity: "0.43",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {/* <div>Ad Space 303 * 100</div> */}
        <div
          style={{
            position: "absolute",
            right: "1px",
            top: "-12px",
            fontSize: "12px",
            backgroundColor: "rgb(97, 49, 159)",
            width: "12px",
            textAlign: "center",
          }}
        >
          ?
        </div>
      </div>

      <div
        style={{
          marginLeft: "-5px",
          width: "105%",
          marginTop: "30px",
          height: "0px",
          border: "1px solid #61319F",
          opacity: "0.43",
        }}
      />

      <div
        style={{
          position: "relative",
          marginTop: "30px",
          height: "156px",
          backgroundColor: "rgb(0, 0, 0)",
          color: "white",
          opacity: "0.43",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {/* <div className="fs-20">Ad Space 303 * 176</div> */}
        <div
          style={{
            position: "absolute",
            right: "1px",
            top: "-12px",
            fontSize: "12px",
            backgroundColor: "rgb(97, 49, 159)",
            width: "12px",
            textAlign: "center",
          }}
        >
          ?
        </div>
      </div>

      <div
        style={{
          marginLeft: "-5px",
          width: "105%",
          marginTop: "30px",
          height: "0px",
          border: "1px solid #61319F",
          opacity: "0.43",
        }}
      />

      <div
        style={{
          position: "relative",
          marginTop: "30px",
          height: "253px",
          backgroundColor: "rgb(0, 0, 0)",
          color: "white",
          opacity: "0.43",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {/* <div>Ad Space 303 * 303</div> */}
        <div
          style={{
            position: "absolute",
            right: "1px",
            top: "-12px",
            fontSize: "12px",
            backgroundColor: "rgb(97, 49, 159)",
            width: "12px",
            textAlign: "center",
          }}
        >
          ?
        </div>
      </div>

      <div
        style={{
          position: "relative",
          marginTop: "100px",
          height: "100px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <img
          src="./assets/img/Kal-with-tongue-out.png"
          alt="tongue"
          style={{ width: "158px" }}
        />
        <div
          style={{
            position: "absolute",
            color: "white",
            fontSize: "20px",
            fontWeight: 700,
            right: 10,
            top: 20,
          }}
        >
          Need Help?
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 20,
          right: 250,
          width: "28px",
          height: "28px",
          cursor: "pointer",
        }}
        onClick={() => toggle()}
        onKeyDown={() => btnclick()}
        role="button"
        tabIndex={0}
      >
        <img
          src="./assets/img/right.png"
          alt="right"
          style={{ width: "28px" }}
        />
      </div>
    </SidebarContainer>
  );
}
