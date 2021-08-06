import React, { useContext } from 'react'
import { Button, useWalletModal as UikitMenu } from 'glx-uikit'
import { useHistory } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'

export default function Navbar({toggle}) {
  const { account, activate, deactivate } = useWeb3React()
  const { login, logout } = useAuth()
  //   const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  //   const { isDark, toggleTheme } = useTheme()
  //   const priceData = useGetPriceData()
  //   const cakePriceUsd = priceData ? Number(priceData.prices.Cake) : undefined
  //   const profile = useGetLocalProfile()

  const { onPresentConnectModal, onPresentAccountModal } = UikitMenu(login, deactivate, account as string)
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null
  const history = useHistory()

  return (
    <div className="container-fluid top-nav-bg">
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container-fluid">
          <div style={{display:"flex"}}>
          <button type="submit" data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="/navcol-1" style={{marginTop:'0px', marginLeft:'-15px' ,alignSelf: 'center', border: 'unset'}} onClick={toggle}>
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon text-white" />
          </button>
          <a className="navbar-brand" href="https://galaxyswap.net/">
            <img src="./assets/img/galaxyswap-logo-color-800px.png" alt="Galaxy Swap" style={{width: "180px", marginLeft:'30px'}} />
          </a>
          <a className="navbar-icon" href="https://galaxyswap.net/">
            <img src="./assets/img/Icon-galaxyswap-192x192.png" alt="Galaxy Swap" style={{marginLeft: '5px', width: "50px"}} />
          </a>
          </div>

          <div className="nav-btn-show">
            <span className="navbar-text actions">
              <div>
                {account ? (
                  <Button
                  className="btn text-white xrounded pink-gredient"
                  style={{height: '25px', fontSize:'12px'}}
                    onClick={() => {
                      onPresentAccountModal()
                    }}
                  >
                    {accountEllipsis}
                  </Button>
                ) : (
                  <Button
                  className="btn text-white xrounded pink-gredient"
                  style={{height: '25px', fontSize:'12px'}}
                    onClick={() => {
                      onPresentConnectModal()
                    }}
                  >
                    Connect
                  </Button>
                )}
              </div>
            </span>
            <img src="./assets/img/alien-kal-avatar.png" alt="profile" style={{marginLeft:'11px', width:'25px', marginTop: '7px', height: '25px'}} />
          </div>
          <div className="collapse navbar-collapse" id="navcol-1">
          <span className="pink-color small mt-2">Powered by GalaxyProtocol</span>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link small mosk-bold-700 text-white" href="https://galaxyprotocol.io/#/" target='_blank' rel="noreferrer">
                Go to GalaxyProtocol
                </a>
              </li>
            </ul>
            <span className="navbar-text actions">
            <div>
              {account ? (
                <Button
                className="btn text-white xrounded pink-gredient"
                style={{marginLeft:'70px',height: '46px', width:'150px'}}
                  onClick={() => {
                    onPresentAccountModal()
                  }}
                >
                  {accountEllipsis}
                </Button>
              ) : (
                <Button
                className="btn text-white xrounded pink-gredient"
                style={{marginLeft:'70px',height: '46px', width:'150px'}}
                  onClick={() => {
                    onPresentConnectModal()
                  }}
                >
                  Connect
                </Button>
              )}
            </div>
          </span>
          <img src="./assets/img/alien-kal-avatar.png" alt="profile" style={{marginLeft:'11px', width:'40px'}} />
          </div>
        </div>
      </nav>
    </div>
  )
}