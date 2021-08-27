import React from "react";
import styled from "styled-components";
import { Text, ChevronRightIcon } from "glx-uikit";
import Page from "components/layout/Page";

const HomePage = styled(Page)`
  max-width: 1400px;
  @media screen and (max-width: 950px) {
    min-height: 0px;
  }
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
  color: white;

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

const BtnDiv = styled.div`
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
  margin-top: 48px;
  padding: 18px 38px;

  > span {
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
    > div {
      background: transparent linear-gradient(282deg, #ff1fff 0%, #440c8b 100%)
        0% 0% no-repeat padding-box;
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
  color: white;

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
    font-size: 17px;
  }
`;

const RightMiddleDetailText = styled(Text)`
  font-size: 20px;
  font-weight: 300;
  color: white;

  @media (max-width: 1368px) {
    font-size: 14px;
  }

  @media (max-width: 587px) {
    font-size: 10px;
  }
`;

const RightMiddleDetailLabel = styled(RightMiddleDetailText)`
  width: 55%;
  // margin-right: 12px;
`;

const TotalLockedValueTtitle = styled(Text)`
  font-size: 30px;
  color: #ff1fff;
  font-weight: 900;

  @media (max-width: 1368px) {
    font-size: 24px;
  }

  @media (max-width: 587px) {
    font-size: 16px;
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
    font-size: 17px;
  }
`;

const RightMiddleBox = styled.div`
  display: flex;
  margin: 24px 0;

  @media (max-width: 1368px) {
    margin: 17px 0;
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


const AnimationIcon = styled.div`
  align-self: center;
  >svg {
    fill: #FF1FFF;
    zoom: 2.5;
    @media (max-width: 1368px) {
      zoom: 2;
    }
  
    @media (max-width: 587px) {
      zoom: 1.5;
    }
  }
  &:hover {
    transform: translateX(10px);
    animation-duration: 0.3s;
    animation-name: slidein;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    @keyframes slidein {
      from {
        transform: translate(0px, 0px);
      }
    
      to {
        transform: translate(20px, 0px);
      }
    }
  }
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
  color: #ffffff;
`;

const Home: React.FC = () => {
  return (
    <HomePage>
      <HomePageContent>
        <LeftSection>
          <TitleText>Swap, Stake,</TitleText>
          <TitleText>Farm or Launch.</TitleText>
          <div style={{ display: "flex" }}>
            <Btn text="START THE APP" />
          </div>
        </LeftSection>
        <RightSection>
          <Card style={{ justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <RightSectionLongDivText>Earn up to</RightSectionLongDivText>
              <RightSectionHighlightText style={{ margin: "0 10px" }}>
                200% APR
              </RightSectionHighlightText>
              <RightSectionLongDivText>in Farms</RightSectionLongDivText>
            </div>
            <AnimationIcon>
              <ChevronRightIcon/>
            </AnimationIcon>
          </Card>
          <RightMiddleBox>
            <div style={{ flex: 1 }}>
              <RightMiddleCardLeft>
                <RightSectionHighlightText>GLX Stats</RightSectionHighlightText>
                <div style={{ display: "flex" }}>
                  <RightMiddleDetailLabel>
                    Total GLX Supply
                  </RightMiddleDetailLabel>
                  <RightMiddleDetailText>100,000,000</RightMiddleDetailText>
                </div>
                <div style={{ display: "flex" }}>
                  <RightMiddleDetailLabel>
                    Total GLX Burned
                  </RightMiddleDetailLabel>
                  <RightMiddleDetailText>0</RightMiddleDetailText>
                </div>
                <div style={{ display: "flex" }}>
                  <RightMiddleDetailLabel>
                    Total GLX/ Block
                  </RightMiddleDetailLabel>
                  <RightMiddleDetailText>25</RightMiddleDetailText>
                </div>
              </RightMiddleCardLeft>
            </div>
            <div style={{ flex: 1 }}>
              <RightMiddleCard
                style={{
                  justifyContent: "space-between",
                }}
              >
                <TotalLockedValueTtitle>
                  Total Value Locked
                </TotalLockedValueTtitle>
                <TotalLockedValueText>2648710.50</TotalLockedValueText>
                <Text style={{ fontSize: "10px" }}>
                  Across all LPs and Galastic Pools
                </Text>
              </RightMiddleCard>
            </div>
          </RightMiddleBox>
          <Card style={{ justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <RightSectionLongDivText>Earning </RightSectionLongDivText>
              <RightSectionHighlightText style={{ margin: "0 10px" }}>
                GALAXIA
              </RightSectionHighlightText>
              <RightSectionLongDivText>in pools</RightSectionLongDivText>
            </div>
            <AnimationIcon>
              <ChevronRightIcon/>
            </AnimationIcon>
          </Card>
        </RightSection>
      </HomePageContent>
    </HomePage>
  );
};

export default Home;
