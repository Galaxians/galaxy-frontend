import React from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { Text, BaseLayout, ChevronRightIcon } from "glx-uikit";
import useI18n from "hooks/useI18n";
import Page from "components/layout/Page";
import { Btn } from "components/LaunchPad/LaunchPadItem";

const HomePage = styled(Page)`
  max-width: 1400px;
`;

const HomePageContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 150px;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;

const TitleText = styled(Text)`
  font-size: 68px;
  font-weight: 800;
  line-height: 76px;

  @media (max-width: 1368px) {
    font-size: 48px;
    line-height: 54px;
  }

  @media (max-width: 950px) {
    font-size: 36px;
  }
`;

const Card = styled.div`
  display: flex;
  border: 1px solid #61319f;
  border-radius: 8px;
  opacity: 1;
  background: unset;
  cursor: pointer;
  color: white;
  padding: 30px 40px;

  @media (max-width: 1368px) {
    padding: 15px 20px;
  }
`;

const BtnDiv = styled(Link)`
  border: 1px solid #61319f;
  border-radius: 8px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  font-weight: 800;
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
    background: transparent linear-gradient(282deg, #ff1fff 0%, #440c8b 100%) 0%
      0% no-repeat padding-box;
  }
  &:hover {
    color: white;
    >div {
      background: transparent linear-gradient(282deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
      width: 100%;
    }
  }

  @media (max-width: 1368px) {
    font-size: 18px;
  }

  @media (max-width: 950px) {
    font-size: 12px;
    margin-top: 30px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  @media screen and (max-width: 950px) {
    padding: 24px;
    margin-top: 0;
  }
`;

const RightSection = styled.div`
  width: 50%;
  margin-left: 24px;

  @media screen and (max-width: 950px) {
    margin-left: 0px;
    width: 100%;
    margin-top: 70px;
  }
`;

const RightSectionLongDivText = styled(Text)`
  font-size: 30px;
  font-weight: 300;

  @media (max-width: 1368px) {
    font-size: 22px;
  }

  @media (max-width: 587px) {
    font-size: 16px;
  }
`;

const RightSectionHighlightText = styled(Text)`
  font-size: 35px;
  color: #ff1fff;
  font-weight: 900;

  @media (max-width: 1368px) {
    font-size: 30px;
  }

  @media (max-width: 587px) {
    font-size: 20px;
  }
`;

const RightMiddleDetailText = styled(Text)`
  font-size: 20px;
  font-weight: 300;

  @media (max-width: 1368px) {
    font-size: 14px;
  }

  @media (max-width: 587px) {
    font-size: 12px;
  }
`;

const RightMiddleDetailLabel = styled(RightMiddleDetailText)`
  width: 55%;
  margin-right: 12px;
`;

const TotalLockedValueTtitle = styled(Text)`
  font-size: 30px;
  color: #ff1fff;
  font-weight: 900;

  @media (max-width: 1368px) {
    font-size: 24px;
  }

  @media (max-width: 587px) {
    font-size: 20px;
  }
`;

const TotalLockedValueText = styled(Text)`
  font-size: 40px;
  color: white;
  font-weight: 700;

  @media (max-width: 1368px) {
    font-size: 30px;
  }

  @media (max-width: 587px) {
    font-size: 20px;
  }
`;

const RightMiddleBox = styled.div`
  display: flex;
  margin: 24px 0;

  @media (max-width: 1368px) {
    margin: 16px 0;
  }
`;

const RightMiddleCard = styled(Card)`
  flex-direction: column;
  padding: 10px 22px;
  height: 100%;

  @media (max-width: 587px) {
    padding: 8px 16px;
  }
`;

const RightMiddleCardLeft = styled(RightMiddleCard)`
  margin-right: 24px;

  @media (max-width: 1368px) {
    margin-right: 16px;
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
`;

const Btn = ({ text }) => {
  return (
    <BtnDiv>
      <span>{text}</span>
      <div />
    </BtnDiv>
  );
};

const StartBtn = ({ text }) => {
  return (
    <StartBtnDiv>
      <span>{text}</span>
      <div />
    </StartBtnDiv>
  );
};

const NormalHalfText = styled(Text)`
  font: normal normal 300 20px/24px Mosk;
  color: #ffffff;
  width: 50%;
`;
const NormalText = styled(Text)`
  font: normal normal 300 20px/24px Mosk;
  color: #ffffff;
`;

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
const Home: React.FC = () => {
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
              </RightMiddleCardLeft>
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
            <ChevronRightIcon style={{ fill: "#FF1FFF", zoom: "1.2" }} />
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
