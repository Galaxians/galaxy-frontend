import React from "react";
import styled from "styled-components";
import { Button, Text, BaseLayout } from "glx-uikit";
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


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px; 
  @media screen and (min-width: 1550px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;
  max-width: 550px;
  padding: 20px;
  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    padding-top: 0;
  }

  @media screen and (max-width: 1550px) {
    align-items: center;
    margin-bottom: 30px;
    &>div{
       text-align: center;
    }
  }
  @media screen and (max-width: 660px) {
    &>div{
       font-size: 40px;
    }
  }

`;
// background-image: url("/images/new/kal-artwork-exchange.png"),
// url("/images/new/kal-artwork-exchange.png");
// const Cards = styled(BaseLayout)`
//   align-items: stretch;
//   justify-content: stretch;
//   margin: 25px 0px;
//   & > div {
//     grid-column: span 6;
//     width: 100%
//   }

//   ${({ theme }) => theme.mediaQueries.sm} {
//     & > div {
//       grid-column: span 8;
//       width: 100%
//     }
//   }

//   ${({ theme }) => theme.mediaQueries.lg} {
//     & > div {
//       grid-column: span 6;
//     }
//   }
// `;

const Cards = styled.div`
  display: flex;
  margin: 25px 0px;
  flex-direction: row;
  gap: 25px;
  @media screen and (max-width: 660px) {
    flex-direction: column;
    &>*{
      min-width: 0px;
    }
  }
`

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
`

export const StyledLink = styled.a`
  padding: 13px 42px;
  border: 1px solid #61319F;
  border-radius: 8px;
  margin-top: 20px;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  >span {
    z-index: 1;
  }
  >div {
    transition: 1s;
    width: 0%;
  }
  &:hover {
    color: white !important;
    >div {
      background: transparent linear-gradient(90deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
      width: 100%;
    }
  }
`
const Home: React.FC = () => {
  const TranslateString = useI18n();

  return (
    <Page>
      <Wrapper >
        <Hero>
          <Text fontSize="68px" fontWeight="800" bold mb="10px" color="#ffffff">
            {TranslateString(576, "Swap, Stake, Farm or Launch.")}
          </Text>
          <StyledLink href="#" target='_blank' rel="noreferrer">
            <span><Text color="contrast" fontWeight="800" fontSize="22px">{TranslateString(576, "START THE APP")}</Text></span>
            <div style={{position:'absolute',top:0,left:0,height:'100%', borderRadius: '10px'}} />
          </StyledLink>
          {/* <a className="start-btn" href="https://exchange.galaxyswap.net/" ><Text color="contrast" fontWeight="800" fontSize="22px">{TranslateString(576, "START THE APP")}</Text></a> */}
        </Hero>
        <div>
          <EarnAPYCard />
          <Cards>
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
          <EarnAssetCard />
        </div>
      </Wrapper >
    </Page>
  );
};

export default Home;
