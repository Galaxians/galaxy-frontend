import React, { useContext } from "react";
import { Button, useWalletModal as UikitMenu } from "glx-uikit";
import { Link, useHistory } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import { BASE_EXCHANGE_URL } from "config";

export default function Leftnav() {
  const history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg justify-content-left leftnav">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="ToggleNavigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul className="list-unstyled">
              <li className="left-exchange-icon">
                <a href={BASE_EXCHANGE_URL}>Exchange</a>
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
        </div>
      </div>
    </nav>
  );
}
