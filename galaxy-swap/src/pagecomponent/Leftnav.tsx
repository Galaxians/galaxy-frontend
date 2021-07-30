import React, { useContext } from 'react'
import { Button, useWalletModal as UikitMenu } from 'glx-uikit'
import { useHistory } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'

export default function Leftnav() {
  const history = useHistory()

  return (
    // <div className="justify-content-left leftnav">
    //   <ul className="list-unstyled">
    //     <li className="left-exchange-icon">Exchange</li>
    //     <li className="left-farms-icon">
    //       <a href="https://www.galaxyswap.net/farms">Galaxia Farms</a>
    //     </li>
    //     <li className="left-pool-icon">
    //       <a href="https://www.galaxyswap.net/pools"> Galaxia Pool</a>
    //     </li>
    //     <li className="left-redeem-icon">Galaxia Redeem</li>
    //   </ul>
    // </div>

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
          </div>
        </div>
      </div>
    </nav>
  )
}
