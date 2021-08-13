import React from "react";
import styled from "styled-components";
import orderBy from "lodash/orderBy";
import { Text, Card, CardBody, Flex, ChevronRightIcon } from "glx-uikit";
import { NavLink } from "react-router-dom";
import pools from "config/constants/pools";
import { Pool } from "state/types";

const ArrowRight = styled(ChevronRightIcon)`
  fill: #ff1fff;
  width: 40px;
`
const StyledFarmStakingCard = styled(Card)`
  background: rgba(0,0,0,0);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border: 1px solid #61319F;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 31px 47px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`;
const CardMidContent = styled(Text)`
  line-height: 44px;
  color: #ff1fff;
  font-size: 35px;
  padding: 0px 10px;
  font-weight: 900;
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
        <Flex style={{width: "100%"}} >
          <Text fontSize="30px" color="contrast" >
            Earning
          </Text>
          <CardMidContent bold >{assets}</CardMidContent>
          
          <Text fontSize="30px" color="contrast" >
            in Pools
          </Text>
        </Flex>
        <NavLink exact activeClassName="active" to="/pools" id="pool-cta">
          <ArrowRight />
        </NavLink>
    </StyledFarmStakingCard>
  );
};

export default EarnAssetCard;
