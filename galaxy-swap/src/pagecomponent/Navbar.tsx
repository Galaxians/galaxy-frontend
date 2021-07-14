import React, { useContext } from 'react'
import { Button, useWalletModal as UikitMenu } from 'glx-uikit'
import { useHistory } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'

export default function Navbar() {
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
    <div className="container">
      <nav className="navbar navbar-light navbar-expand-xl">
        <div className="container">
          <a className="navbar-brand" href="/">
            &nbsp;
            <img alt="" src="assets/img/axia_blue_logo.png" />
          </a>
          <button type="submit" data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="/navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="https://axiadefi.zeeve.net/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <select
                  style={{
                    border: 'none',
                    background: 'none',
                    marginTop: '3px',
                    marginRight: '8px',
                    marginLeft: '8px',
                  }}
                  onClick={(e) => {
                    console.log(e.currentTarget.value)
                    if (e.currentTarget.value === 'exchange') {
                      history.push('/Swap')
                      console.log('hello')
                      window.location.reload()
                    }
                    if (e.currentTarget.value === 'liquidity') {
                      history.push('/Pool')
                      console.log('hello')
                      window.location.reload()
                    }
                  }}
                >
                  <option>Trade</option>
                  <option value="exchange">Exchange</option>
                  <option value="liquidity">Liquidity</option>
                </select>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://axiadefi.zeeve.net/farms">
                  Farms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://axiadefi.zeeve.net/nests">
                  Pools
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://axiadefi.zeeve.net/lotterys">
                  Lottery
                </a>
              </li>
              <li className="nav-item mr-15">
                <a className="nav-link" href="/Analytics">
                  Analytics
                </a>
              </li>
            </ul>
          </div>
          <span className="navbar-text actions">
            <div>
              {account ? (
                <Button
                  variant="tertiary"
                  onClick={() => {
                    onPresentAccountModal()
                  }}
                >
                  {accountEllipsis}
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    onPresentConnectModal()
                  }}
                >
                  Connect
                </Button>
              )}
            </div>
          </span>
        </div>
      </nav>
    </div>
  )
}
