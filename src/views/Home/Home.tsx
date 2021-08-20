import React from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { Text, BaseLayout, ChevronRightIcon } from "glx-uikit";
import useI18n from "hooks/useI18n";
import Page from "components/layout/Page";
import { Btn } from "components/LaunchPad/LaunchPadItem";

const HomePage = styled(Page)`
  max-width: 1200px;
`;

const Card = styled.div`
  display: flex;
  border: 1px solid #61319f;
  border-radius: 8px;
  opacity: 1;
  background: unset;
  cursor: pointer;
  color: white;
  padding: 20px 30px;
  width: 650px;
  * {
    font-family: 'Mosk';
  }
`
// width: 500px;

const BtnDiv = styled(Link)`
  border: 1px solid #61319f;
  border-radius: 8px;
  opacity: 1;
  width: 240px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  * {
    font-family: 'Mosk';
  }
  >span {
    font-weight: 800;
    z-index: 1;
  }
  > div {
    transition: 0.3s;
    width: 0%;
    border-radius: 8px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent linear-gradient(282deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;

  }
  &:hover {
    color: white;
    >div {
      background: transparent linear-gradient(282deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
      width: 100%;
    }
  }
  @media (max-width: 950px) {
    width: 160px;
    height: 40px;
    font-size: 12px;
  }
`;

const StartBtnDiv = styled(BtnDiv)`
  font: normal normal normal 22px/27px Mosk;
  width: 239px;
  font-weight: 800;
`;

const Wrapper = styled.div`
  max-width: 1362px;
  margin: auto;
`

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

const AnimationDiv = styled.div`.
  transform: translateX(0px);
  &:hover {
    transform: translateX(15px);
    animation-duration: 0.7s;
    animation-name: slidein;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    @keyframes slidein {
      from {
        transform: translate(0px, 0px);
      }
    
      to {
        transform: translate(30px, 0px);
      }
    }
  }
`

interface HomeProps {
  isMobile?: boolean;
}


const Home: React.FC<HomeProps> = ({ isMobile }) => {
  const TranslateString = useI18n();

  return (
    <Page>
      {!isMobile ? <div style={{ display: 'flex', marginTop: '150px' }}>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', marginTop: '50px', paddingLeft: '200px' }}>
          <Text style={{ fontSize: '72px',fontFamily: 'Mosk', fontWeight: 700, color: 'white' }}>Swap, Stake,</Text>
          <Text style={{ fontSize: '72px',fontFamily: 'Mosk', fontWeight: 700, color: 'white' }}>Farm or Launch.</Text>
          <div style={{ marginTop: '30px' }}>
          <BtnDiv to="/exchange"  rel="noreferrer">
            <span>START THE APP</span>
            <div style={{position: "absolute", top: 0, left: 0, height: "100%", borderRadius: "8px"}}/>
          </BtnDiv>
          </div>
        </div>
        <div style={{ flex: '1.5'}}>
        <a href="/farms">
          <Card style={{ justifyContent: 'space-between'}}>
            <div style={{ display: 'flex' }}>
              <Text style={{ fontSize: '36px', color: 'white' }}>Earn up to </Text>
              <Text style={{ fontSize: '36px', color: '#FF1FFF', margin: '0px 10px', fontWeight: 900 }}>200% APR</Text>
              <Text style={{ fontSize: '36px', color: 'white' }}>in Farms</Text>
            </div>
            <AnimationDiv style={{alignSelf: 'center'}}><ChevronRightIcon style={{ fill: '#FF1FFF', zoom: '2' }} /></AnimationDiv>
          </Card>
          </a>
          <div style={{ display: 'flex', marginTop: '20px', width: '650px' }}>
            <div style={{ flex: 1 }}>

              <Card style={{ flexDirection: 'column', marginRight: '5px', padding: '10px 20px', height: '100%', width: '320px' }}>
                <Text style={{ fontSize: '36px', color: '#FF1FFF', fontWeight: 900 }}>GLX Stats</Text>
                <div style={{ display: 'flex' }}>
                  <Text style={{ fontSize: '20px', width: '170px', color: 'white' }}>Total GLX Supply</Text><Text style={{ fontSize: '20px', color: 'white' }}>100,000,000</Text>
                </div>
                <div style={{ display: 'flex' }}>
                  <Text style={{ fontSize: '20px', width: '170px', color: 'white' }}>Total GLX Burned</Text><Text style={{ fontSize: '20px', color: 'white' }}>0</Text>
                </div>
                <div style={{ display: 'flex' }}>
                  <Text style={{ fontSize: '20px', width: '170px', color: 'white' }}>Total GLX/ Block</Text><Text style={{ fontSize: '20px', color: 'white' }}>25</Text>
                </div>
              </Card>
            </div>
            <div style={{ flex: 1 }}>
              <Card style={{ flexDirection: 'column', padding: '10px', height: '100%', width: '320px' }}>
                <Text style={{ fontSize: '32px', color: '#FF1FFF', fontWeight: 800 }}>Total Value Locked</Text>
                <Text style={{ fontSize: '40px', fontWeight: 700, color: 'white' }}>2648710.50</Text>
                <Text style={{ fontSize: '20px', color: 'white' }}>Across all LPs and Galastic Pools</Text>
              </Card>
            </div>
          </div>
          <a href="/pools">
          <Card style={{ justifyContent: 'space-between', marginTop: '25px' }}>
            <div style={{ display: 'flex' }}>
              <Text style={{ fontSize: '36px', color: 'white' }}>Earning </Text>
              <Text style={{ fontSize: '36px', color: '#FF1FFF', margin: '0px 10px', fontWeight: 900 }}>GALAXIA</Text>
              <Text style={{ fontSize: '36px', color: 'white' }}>in pools</Text>
            </div>
            <AnimationDiv style={{alignSelf: 'center'}}><ChevronRightIcon style={{ fill: '#FF1FFF', zoom: '2' }} /></AnimationDiv>
          </Card>
          </a>
        </div>
      </div> :  <div style={{ marginTop: '50px', flexDirection: 'column' }}>
        <div style={{marginLeft: '25px'}}>
        <Text style={{ fontSize: '35px', fontWeight: 800, color: 'white'}}>Swap, Stake,</Text>
        <Text style={{ fontSize: '35px', fontWeight: 800, color: 'white'}}>Farm or Launch.</Text>

        <div style={{ marginTop: '30px', marginBottom: '100px' }}>
          <BtnDiv to="/exchange"  rel="noreferrer">
            <span>START THE APP</span>
            <div style={{position: "absolute", top: 0, left: 0, height: "100%", borderRadius: "8px"}}/>
          </BtnDiv>
        </div>
        </div>

        <Card style={{ justifyContent: 'space-between', padding: '10px 25px', width: '100%' }}>
            <div style={{ display: 'flex' }}>
              <Text style={{ fontSize: '20px', color: 'white' }}>Earn up to </Text>
              <Text style={{ fontSize: '20px', color: '#FF1FFF', margin: '0px 10px', fontWeight: 900 }}>200% APR</Text>
              <Text style={{ fontSize: '20px', color: 'white' }}>in Farms</Text>
            </div>
            <ChevronRightIcon style={{ fill: '#FF1FFF', zoom: '1.2' }} />
          </Card>
          <div style={{ display: 'flex', marginTop: '20px', width: '100%' }}>
            <div style={{ flex: 1 }}>
              <Card style={{ flexDirection: 'column', marginRight: '5px', padding: '5px 15px', height: '100%', width: '95%'}}>
                <Text style={{ fontSize: '20px', color: '#FF1FFF', fontWeight: 900 }}>GLX Stats</Text>
                <div style={{ display: 'flex' }}>
                  <Text style={{ fontSize: '12px', width: '60%', color: 'white' }}>Total GLX Supply</Text><Text style={{ fontSize: '12px', color: 'white' }}>100,000,000</Text>
                </div>
                <div style={{ display: 'flex' }}>
                  <Text style={{ fontSize: '12px', width: '60%', color: 'white' }}>Total GLX Burned</Text><Text style={{ fontSize: '12px', color: 'white' }}>0</Text>
                </div>
                <div style={{ display: 'flex' }}>
                  <Text style={{ fontSize: '12px', width: '60%', color: 'white' }}>Total GLX/ Block</Text><Text style={{ fontSize: '12px', color: 'white' }}>25</Text>
                </div>
              </Card>
            </div>
            <div style={{ flex: 1 }}>
              <Card style={{ flexDirection: 'column', padding: '5px 15px', height: '100%', width: '100%' }}>
                <Text style={{ fontSize: '18px', color: '#FF1FFF', fontWeight: 800 }}>Total Value Locked</Text>
                <Text style={{ fontSize: '22px', fontWeight: 800, color: 'white' }}>2648710.50</Text>
                <Text style={{ fontSize: '12px', color: 'white' }}>Across all LPs and Galastic Pools</Text>
              </Card>
            </div>
            
          </div>
          <Card style={{ justifyContent: 'space-between', padding: '10px 25px', marginTop: '25px', width: '100%' }}>
              <div style={{ display: 'flex' }}>
                <Text style={{ fontSize: '20px', color: 'white' }}>Earning </Text>
                <Text style={{ fontSize: '20px', color: '#FF1FFF', margin: '0px 10px', fontWeight: 900 }}>GALAXIA</Text>
                <Text style={{ fontSize: '20px', color: 'white' }}>in Pools</Text>
              </div>
              <ChevronRightIcon style={{ fill: '#FF1FFF', zoom: '1.2' }} />
            </Card>
        </div>
      }
    </Page>
  );
};

export default Home;
