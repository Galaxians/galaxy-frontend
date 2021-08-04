import React from "react";
import styled from "styled-components";
import orderBy from "lodash/orderBy";
import { Heading, Card, CardBody, Flex, ArrowForwardIcon } from "glx-uikit";
import { NavLink } from "react-router-dom";
import pools from "config/constants/pools";
import { Pool } from "state/types";

const StyledFarmStakingCard = styled(Card)`
  background: transparent linear-gradient(90deg, #FF1FFF 0%, #A700FF 100%) 0% 0% no-repeat padding-box;
  margin-left: auto;
  margin-right: auto;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`;
const CardMidContent = styled(Heading).attrs({ size: "xl" })`
  line-height: 44px;
`;
const EarnAssetCard = () => {
  const activeNonCakePools = pools.filter(
    (pool) => !pool.isFinished && !pool.tokenName.includes("CAKE")
  );
  const latestPools: Pool[] = orderBy(
    activeNonCakePools,
    ["sortOrder", "pid"],
    ["desc", "desc"]
  ).slice(0, 3);
  // Always include CAKE
  const assets = ["GLX", ...latestPools.map((pool) => pool.tokenName)].join(
    ", "
  );

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="contrast" size="lg">
          Earn
        </Heading>
        <CardMidContent color="invertedContrast">{assets}</CardMidContent>
        <Flex justifyContent="space-between">
          <Heading color="contrast" size="lg">
            in Pools
          </Heading>
          <NavLink exact activeClassName="active" to="/pools" id="pool-cta">
            <ArrowForwardIcon mt={30} color="white" />
          </NavLink>
        </Flex>
      </CardBody>
    </StyledFarmStakingCard>
  );
};

export default EarnAssetCard;
