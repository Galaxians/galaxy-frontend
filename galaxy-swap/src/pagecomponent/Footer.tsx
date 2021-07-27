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
<div className="footer">
        <div className="footer-bg p-5">
          <div className="row justify-content-center" style={{paddingTop:'70px'}}>
            <img src="./assets/img/galaxy-footer-logo.png" style={{width: '427px'}} alt="" />            
          </div>
          
          <div className="row justify-content-center mt-5">
            <div className="col-auto">
              <img src="./assets/img/icon-1.png" alt=""/>
            </div>
            <div className="col-auto">
              <img src="./assets/img/telegram.png" alt=""/>
            </div>
            <div className="col-auto">
              <img src="./assets/img/twitter.png" alt=""/>
            </div>
            <div className="col-auto">
              <img src="./assets/img/facebook.png" alt=""/>
            </div>
            <div className="col-auto">
              <img src="./assets/img/instagram.png" alt=""/>
            </div>
            <div className="col-auto">
              <img src="./assets/img/icon-6.png" alt=""/>
            </div>
            <div className="col-auto">
              <img src="./assets/img/tiktok.png" alt=""/>
            </div>
          </div>

          <div className="row justify-content-center text-secondary mt-4">
            &#169; 2021 SafeGalaxy
          </div>


        </div>

    </div>

    )
}
