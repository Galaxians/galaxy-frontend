import React, { useContext } from "react";
import { Button, useWalletModal as UikitMenu } from "glx-uikit";
import { Link, useHistory } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";

import {Navbar, Nav, Container} from 'react-bootstrap'

export default function Leftnav() {
  const history = useHistory();

  return (
    // <div className="d-flex justify-content-left leftnav">
    //   <ul className="list-unstyled">
    //     <li className="left-exchange-icon">
    //       <a href="https://exchange.galaxyswap.net/">Exchange</a>{" "}
    //     </li>
    //     <li className="left-farms-icon">
    //       <Link to="/farms">Galaxia Farms</Link>{" "}
    //     </li>
    //     <li className="left-pool-icon">
    //       {" "}
    //       <Link to="/pools">Galaxia Pool</Link>
    //     </li>
    //     <li className="left-redeem-icon">
    //       {" "}
    //       <Link to="https://galaxyprotocol.io/#/buyback">Galaxia Redeem</Link>
    //     </li>
    //   </ul>
    // </div>

<div className="justify-content-left leftnav">
  <Navbar collapseOnSelect expand="lg" variant="dark">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{position:'absolute' ,top:'-44px',left:'-16px'}} />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {/* <Nav.Link href="#features">
        <div className="left-exchange-icon">
          <a href="/">Exchange</a>
        </div>
      </Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}

      <ul className="list-unstyled">
              <li className="left-exchange-icon">
                <a href="/">Exchange</a>
              </li>
              <li className="left-farms-icon">
                <a href="https://www.galaxyswap.net/farms">Galaxia Farms</a>
              </li>
              <li className="left-pool-icon">
                <a href="https://www.galaxyswap.net/pools">Galaxia Pool</a>
              </li>
              <li className="left-redeem-icon">
                <a href="https://galaxyprotocol.io/#/buyback">Galaxia Redeem</a>
              </li>
            </ul>
            <br />
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>


    // <nav className="navbar navbar-expand-lg justify-content-left leftnav">
    //   <div className="container-fluid">
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNavAltMarkup"
    //       aria-controls="navbarNavAltMarkup"
    //       aria-expanded="false"
    //       aria-label="ToggleNavigation"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <div className="navbar-nav">
    //         <ul className="list-unstyled">
    //           <li className="left-exchange-icon">
    //             <a href="/">Exchange</a>
    //           </li>
    //           <li className="left-farms-icon">
    //             <a href="https://www.galaxyswap.net/farms">Galaxia Farms</a>
    //           </li>
    //           <li className="left-pool-icon">
    //             <a href="https://www.galaxyswap.net/pools">Galaxia Pool</a>
    //           </li>
    //           <li className="left-redeem-icon">
    //             <a href="https://galaxyprotocol.io/#/buyback">Galaxia Redeem</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}
