import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside<{ isOpen: any; }>`
  position: fixed;
  z-index: 998;
  width: 100%;
  height: 100%;
  background: transparent linear-gradient(90deg, #000000 0%, #0b001e 100%) 0% 0% no-repeat padding-box;
//   display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 1s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  left: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};
`;


export default function Sidebar({ isOpen, toggle }) {

    const [isTag, setIsTag] = useState(false);
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <div className="navbar-toggler-mine">X</div>
            <div className="navbar-nav">
                <ul className="list-unstyled">
                    <li className="left-exchange-icon">
                        <a href="https://exchange.galaxyswap.net/" onClick={()=>{setIsTag(true)}}>Exchange</a>
                    </li>
                    <li className="left-farms-icon">
                        <Link to="/farms">Galaxia Farms</Link>{" "}
                    </li>
                    <li className="left-pool-icon">
                        {" "}
                        <Link to="/pools">Galaxia Pool</Link>
                    </li>
                    <li className="left-redeem-icon">
                        {" "}
                        <a href="https://galaxyprotocol.io/#/buyback">BuyBack</a>{" "}
                    </li>
                </ul>
            </div>
        </SidebarContainer>
    )
}
