import React, { useContext } from 'react'
import styled from "styled-components";
import { Button, useWalletModal as UikitMenu } from 'glx-uikit'
import { useHistory } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'
import { unset } from 'lodash'

const Img = styled.img`
  width:35px;
  @media (max-width: 950px) {
    width: 24px;
  }
`
const LogoImg = styled.img`
  width:427px;
  @media (max-width: 450px) {
    width: 70%;
  }
`

const FooterBg = styled.div`
  marginTop: 150px;
  @media (max-width: 450px) {
    marginTop: 0px;
  }
`

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
    <div className="footer" style={{paddingBottom: '92px'}}>
      <FooterBg className="footer-bg" >
        <div className="row justify-content-center">
          <img src="./assets/img/galaxy-footer-logo.png" className="footer-image" alt="" />
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-auto  no-padding">
            <a href="https://discord.com/invite/dq7m6R7UAz" target='_blank' rel="noreferrer">
              <img src="./assets/img/icon-1.png" alt="" />
            </a>
          </div>
          <div className="col-auto no-padding">
            <a href="https://t.me/GalaxyProtocolOfficialTG" target='_blank' rel="noreferrer">
              <img src="./assets/img/telegram.png" alt="" />
            </a>
          </div>
          <div className="col-auto no-padding">
            <a href="https://twitter.com/GalaxyProtocol" target='_blank' rel="noreferrer">
              <img src="./assets/img/twitter.png" alt="" />
            </a>
          </div>
          <div className="col-auto no-padding">
            <a href="https://www.facebook.com/GalaxyProtocol/" target='_blank' rel="noreferrer">
              <img src="./assets/img/facebook.png" alt="" />
            </a>
          </div>
          <div className="col-auto no-padding">
            <a href="https://www.instagram.com/safegalaxytoken/?igshid=jr936k6emyet" target='_blank' rel="noreferrer">
              <img src="./assets/img/instagram.png" alt="" />
            </a>
          </div>
          <div className="col-auto no-padding">
            <a href="https://www.reddit.com/r/GalaxyProtocolx/" target='_blank' rel="noreferrer">
              <img src="./assets/img/icon-6.png" alt="" />
            </a>
          </div>
          <div className="col-auto no-padding">
            <a href="https://www.tiktok.com/@safegalaxytoken" target='_blank' rel="noreferrer">
              <img src="./assets/img/tiktok.png" alt="" />
            </a>
          </div>
        </div>
        <div className="row justify-content-center text-secondary mt-4 footer-text">
          &#169; 2021 SafeGalaxy
        </div>
      </FooterBg>
    </div>
  )
}
