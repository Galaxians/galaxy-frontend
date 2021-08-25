import React, { useState } from "react";
import styled from "styled-components";

export const SidebarContainer = styled.aside<{ isOpen: any }>`
  position: fixed;
  z-index: 998;
  color: white;
  width: 280px;
  height: 100%;
  background: transparent linear-gradient(90deg, #000000 0%, #0b001e 100%) 0% 0%
    no-repeat padding-box;
  cursor: pointer;
  align-items: center;
  top: 0;
  left: 0;
  transition: 1s ease-in-out;
  * {
    font-family: 'Mosk';
  }
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  left: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};
  @media(min-width: 990px) {
    display: none;
  }
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const BtnDiv = styled.div`
  border: 1px solid #ff1fff;
  border-radius: 8px;
  opacity: 1;
  width: 160px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 15px;
  position: relative;
  cursor: pointer;
  margin: 10px 0px;
  > span {
    opacity: 0.9;
    z-index: 1;
    >a:hover {
      color: white;
    }
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
  padding: 10px;
  display: flex;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  margin-bottom: 25px;
  > img {
    width: 120px;
  }
  > span {
    position: absolute;
    font-weight: 700px;
    font-size: 14px;
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

const BackDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 997;
`

const MenuLogo = styled.div`
  >img {
    margin-top: 50px;
    margin-left: 25px;
  }
`

const Btn = ({ text}) => {
  return (
    <BtnDiv>
      <span><a href={text.toLowerCase()}>{text}</a></span>
      <div />
    </BtnDiv>
  );
};

export default function Sidebar({ isOpen, toggle }) {
    return (
        <>
        { isOpen ? <BackDiv onClick={isOpen ? toggle : null}/> : null }
        <SidebarContainer isOpen={isOpen}>
            <MenuLogo onClick={toggle}>
              <img src="./assets/img/menu.png" alt="menu"/>
            </MenuLogo>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '70px', flexDirection: 'column', height: '550px' }}>
                <img src="./assets/img/Icon-galaxyswap.png" alt="icon" style={{ width: '30px', marginBottom: '20px' }} />
                <Btn text="EXCHANGE"/>
                <Btn text="FARMS"/>
                <Btn text="POOLS"/>
                <Btn text="LAUNCHPAD"/>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px', marginBottom: '50px'}}>
                <BtnImg>
                    <img src="./assets/img/Kal-with-tongue-out.png" alt="tongue" />
                    <span>Need Help?</span>
                </BtnImg>
                <div style={{ width: '80%', height: '0px', border: '1px solid #FF1FFF' }} />
                <div style={{ marginTop: '25px', display: 'flex', alignItems: 'center', fontSize: '20px'}}><img src="./assets/img/Galaxia-token-color-250px.png" alt="galaxy" style={{ width: '25px', marginRight: '10px' }} />$ 0,063</div>
            </div>
        </SidebarContainer >
        </>
    )
}
