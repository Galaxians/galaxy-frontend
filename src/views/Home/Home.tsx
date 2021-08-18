import React from "react";
import styled from "styled-components";
import { Heading, Text, BaseLayout, ChevronRightIcon } from "glx-uikit";
import useI18n from "hooks/useI18n";
import Page from "components/layout/Page";
import FarmStakingCard from "views/Home/components/FarmStakingCard";
import LotteryCard from "views/Home/components/LotteryCard";
import CakeStats from "views/Home/components/CakeStats";
import TotalValueLockedCard from "views/Home/components/TotalValueLockedCard";
import EarnAPYCard from "views/Home/components/EarnAPYCard";
import EarnAssetCard from "views/Home/components/EarnAssetCard";
import WinCard from "views/Home/components/WinCard";

// background-image: url("/images/pan-bg-mobile.svg");
const Hero = styled.div`
  align-items: center;

  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  // margin-top: 15px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`;
// background-image: url("/images/new/kal-artwork-exchange.png"),
// url("/images/new/kal-artwork-exchange.png");
const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 6;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`;

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`;

const Card = styled.div`
  display: flex;
  border: 1px solid #61319F;
  border-radius: 8px;
  opacity: 1;
  background: unset;
  cursor: pointer;
  color: white;
  padding: 20px 30px;
`
// width: 500px;

const BtnDiv = styled.div`
  border: 1px solid #61319F;
  border-radius: 8px;
  opacity: 1;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  >span {
    z-index: 1;
  }
  >div {
    transition: 0.3s;
    width: 0%;
    border-radius: 8px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent linear-gradient(90deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;

  }
  &:hover {
    >div {
      background: transparent linear-gradient(90deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
      width: 100%;
    }
  }
  @media (max-width: 950px) {
    width: 160px;
    height: 40px;
    font-size: 12px;
  }
`

const StartBtnDiv = styled(BtnDiv)`
  font: normal normal normal 22px/27px Mosk;
  width: 239px;
`;

const Wrapper = styled.div`
  max-width: 1362px;
  margin: auto;
`

const Btn = ({ text }) => {
  return (
    <BtnDiv>
      <span>{text}</span>
      <div />
    </BtnDiv>    
  );
}

const StartBtn = ({ text }) => {
  return (
    <StartBtnDiv>
      <span>{text}</span>
      <div />
    </StartBtnDiv>    
  );
}

const NormalHalfText = styled(Text)`
  font: normal normal 300 20px/24px Mosk;
  color: #FFFFFF;
  width: 50%;
`
const NormalText = styled(Text)`
  font: normal normal 300 20px/24px Mosk;
  color: #FFFFFF;
`

const LargeText = styled(Text)`
  font: normal normal 300 30px/35px Mosk;
  color: #FFFFFF;
`

interface HomeProps {
  isMobile?: boolean;
}


const Home: React.FC<HomeProps> = ({ isMobile }) => {
  const TranslateString = useI18n();

  return (
    <Page>
      <Wrapper>
        {!isMobile ? <div style={{ display: 'flex', marginTop: '150px' }}>
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
            <Text style={{ font: 'normal normal normal 68px/83px Mosk' }}>Swap, Stake,</Text>
            <Text style={{ font: 'normal normal normal 68px/83px Mosk' }}>Farm or Launch.</Text>
            <div style={{ marginTop: '10px' }}>
              <StartBtn text="START THE APP" />
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <Card style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <Text style={{ fontSize: '25px' }}>Earn up to </Text>
                <Text style={{ fontSize: '25px', color: '#FF1FFF', margin: '0px 10px' }}>200% APR</Text>
                <Text style={{ fontSize: '25px' }}>in Farms</Text>
              </div>
              <ChevronRightIcon style={{ fill: '#FF1FFF', zoom: '1.5' }} />
            </Card>
            {/* , width: '450px' */}
            <div style={{ display: 'flex', marginTop: '20px' }}> 
              <div style={{ flex: 1 }}>
              {/* width: '240px' */}
                <Card style={{ flexDirection: 'column', marginRight: '5px', padding: '10px', height: '100%' }}>
                  <Text style={{ font: 'normal normal normal 35px/44px Mosk', color: '#FF1FFF' }}>GLX Stats</Text>
                  <div style={{ display: 'flex' }}>
                    <NormalHalfText >Total GLX Supply</NormalHalfText><NormalHalfText >100,000,000</NormalHalfText>
                  </div>
                  <div style={{ display: 'flex', justifyContent:'space-between' }}>
                    <NormalHalfText >Total GLX Burned</NormalHalfText><NormalHalfText >0</NormalHalfText>
                  </div>
                  <div style={{ display: 'flex', justifyContent:'space-between' }}>
                    <NormalHalfText >Total GLX/ Block</NormalHalfText><NormalHalfText >25</NormalHalfText>
                  </div>
                </Card>
              </div>
              {/* width: '250px' */}
              <div style={{ flex: 1, justifyContent:'space-between' }}>
                <Card style={{ flexDirection: 'column', padding: '10px', height: '100%' }}>
                  <Text style={{ textAlign: 'center', font: 'normal normal normal 30px/38px Mosk', letterSpacing: '0px', color: '#FF1FFF' }}>Total Value Locked</Text>
                  <div style={{ flex:1, flexDirection: 'column', justifyContent:'space-between'}}>
                    <Text style={{ font: 'normal normal bold 40px/48px Mosk' }}>2648710.50</Text>
                    <Text style={{ fontSize: '14px' }}>Across all LPs and Galastic Pools</Text>
                  </div>
                </Card>
              </div>
            </div>
            <Card style={{ justifyContent: 'space-between', marginTop: '25px' }}>
              <div style={{ display: 'flex' }}>
                <LargeText style={{ marginRight: '15px' }}>Earning </LargeText>
                <Text style={{ textAlign: 'center', font: 'normal normal normal 35px/44px Mosk', letterSpacing: '0px', color: '#FF1FFF' }}>GALAXIA</Text>
                <LargeText style={{ marginLeft: '15px' }}>in pools</LargeText>
              </div>
              <ChevronRightIcon style={{ fill: '#FF1FFF', zoom: '1.5' }} />
            </Card>
          </div>
        </div> : <div style={{ marginTop: '50px', flexDirection: 'column' }}>
          <div style={{marginLeft: '25px'}}>
          <Text style={{ fontSize: '35px' }}>Swap, Stake,</Text>
          <Text style={{ fontSize: '35px' }}>Farm or Launch.</Text>
          <div style={{ marginTop: '10px', marginBottom: '100px' }}>
            <StartBtn text="START THE APP" />
          </div>
          </div>
          <Card style={{ justifyContent: 'space-between', padding: '10px 15px', width: '100%' }}>
              <div style={{ display: 'flex' }}>
                <Text style={{ fontSize: '15px' }}>Earn up to </Text>
                <Text style={{ fontSize: '15px', color: '#FF1FFF', margin: '0px 10px' }}>200% APR</Text>
                <Text style={{ fontSize: '15px' }}>in Farms</Text>
              </div>
              <ChevronRightIcon style={{ fill: '#FF1FFF', zoom: '1.2' }} />
            </Card>
            <div style={{ display: 'flex', marginTop: '20px', width: '100%' }}>
              <div style={{ flex: 1 }}>
                <Card style={{ flexDirection: 'column', marginRight: '5px', padding: '5px', height: '100%', width: '95%'}}>
                  <Text style={{ fontSize: '18px', color: '#FF1FFF' }}>GLX Stats</Text>
                  <div style={{ display: 'flex' }}>
                    <Text style={{ fontSize: '10px', width: '60%' }}>Total GLX Supply</Text><Text style={{ fontSize: '10px' }}>100,000,000</Text>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <Text style={{ fontSize: '10px', width: '60%' }}>Total GLX Burned</Text><Text style={{ fontSize: '10px' }}>0</Text>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <Text style={{ fontSize: '10px', width: '60%' }}>Total GLX/ Block</Text><Text style={{ fontSize: '10px' }}>25</Text>
                  </div>
                </Card>
              </div>
              <div style={{ flex: 1 }}>
                <Card style={{ flexDirection: 'column', padding: '5px', height: '100%', width: '100%' }}>
                  <Text style={{ fontSize: '16px', color: '#FF1FFF' }}>Total Value Locked</Text>
                  <Text style={{ fontSize: '20px' }}>2648710.50</Text>
                  <Text style={{ fontSize: '10px' }}>Across all LPs and Galastic Pools</Text>
                </Card>
              </div>
            </div>
            <Card style={{ justifyContent: 'space-between', marginTop: '25px' , width: '100%', padding: '10px 15px'}}>
              <div style={{ display: 'flex' }}>
                <Text style={{ fontSize: '15px' }}>Earning </Text>
                <Text style={{ fontSize: '15px', color: '#FF1FFF', margin: '0px 10px' }}>GALAXIA</Text>
                <Text style={{ fontSize: '15px' }}>in pools</Text>
              </div>
              <ChevronRightIcon style={{ fill: '#FF1FFF', zoom: '1.5' }} />
            </Card>
        </div>
        }
      </Wrapper>
    </Page>
  );
};

export default Home;
