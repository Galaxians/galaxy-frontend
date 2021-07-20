import React, { useContext } from "react";
import { Button, useWalletModal as UikitMenu } from "glx-uikit";
import { Link, useHistory } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";

export default function Leftnav() {
  const history = useHistory();

  return (
    <div className="d-flex justify-content-left leftnav">
      <ul className="list-unstyled">
        <li className="left-exchange-icon">
          <a href="https://glxswap.netlify.app/">Exchange</a>{" "}
        </li>
        <li className="left-farms-icon">
          <Link to="/farms">Galaxia Farms</Link>{" "}
        </li>
        <li className="left-farms-icon">
          {" "}
          <Link to="/pools">Galaxia Pool</Link>
        </li>
        <li className="left-redeem-icon">
          {" "}
          <Link to="/pools">Galaxia Redeem</Link>
        </li>
      </ul>
    </div>
  );
}
