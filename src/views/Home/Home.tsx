import React from "react";
import styled from "styled-components";
import { Heading, Text, BaseLayout } from "glx-uikit";
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

const Home: React.FC = () => {
  const TranslateString = useI18n();

  return (
    <Page>
      <Hero>
        <Text fontSize="68px" mb="10px" color="#ffffff">
          {TranslateString(576, "Galaxia")}
        </Text>
        <Text fontSize="30px" className="pink-color">
          {TranslateString(578, "The #1 AMM and yield farm on Bsc BlockChain.")}
        </Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <FarmStakingCard />
        </Cards>
        <Cards>
          <EarnAPYCard />
          <EarnAssetCard />
          {/* <WinCard /> */}
        </Cards>
        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  );
};

export default Home;
