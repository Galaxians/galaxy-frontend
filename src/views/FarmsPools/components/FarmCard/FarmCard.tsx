import React, { useMemo, useState } from "react";
import BigNumber from "bignumber.js";
import styled, { keyframes } from "styled-components";
import { Flex, Text, Skeleton } from "glx-uikit";
import { communityFarms } from "config/constants";
import { Farm } from "state/types";
import useI18n from "hooks/useI18n";
import ExpandableSectionButton from "components/ExpandableSectionButton";
import CoreFillButton from "components/CoreFillButton";
import { QuoteToken } from "config/constants/types";
import { BASE_ADD_LIQUIDITY_URL } from "config";
import getLiquidityUrlPathParts from "utils/getLiquidityUrlPathParts";
import { useFarmUser } from "state/hooks";
import { getBalanceNumber } from "utils/formatBalance";
import DetailsSection from "./DetailsSection";
import CardHeading from "./CardHeading";
import CardActionsContainer from "./CardActionsContainer";

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber;
  liquidity?: BigNumber;
}

const RainbowLight = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const StyledCardAccent = styled.div`
  background-color: #0b001e;

  background-size: 300% 300%;

  border-radius: 32px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`;
// background: linear-gradient(
//   45deg,
//   rgba(255, 0, 0, 1) 0%,
//   rgba(255, 154, 0, 1) 10%,
//   rgba(208, 222, 33, 1) 20%,
//   rgba(79, 220, 74, 1) 30%,
//   rgba(63, 218, 216, 1) 40%,
//   rgba(47, 201, 226, 1) 50%,
//   rgba(28, 127, 238, 1) 60%,
//   rgba(95, 21, 242, 1) 70%,
//   rgba(186, 12, 248, 1) 80%,
//   rgba(251, 7, 217, 1) 90%,
//   rgba(255, 0, 0, 1) 100%
// );
// animation: ${RainbowLight} 2s linear infinite;
const FCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  background: #0b001e 0% 0% no-repeat padding-box;
  border: 1px solid #ff1fff;
  border-radius: 11px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1),
    0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px 0px;
  position: relative;
  text-align: center;
`;

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`;

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? "100%" : "0px")};
  overflow: hidden;
`;

const FlexStaked = styled(Flex)`
  margin-top: 36px;
  @media (max-width: 500px) {
    margin-top: 12px;
  }
`;

interface FarmCardProps {
  farm: FarmWithStakedValue;
  removed: boolean;
  cakePrice?: BigNumber;
  bnbPrice?: BigNumber;
  ethPrice?: BigNumber;
  account?: string;
  className?: string;
}

const FarmCard: React.FC<FarmCardProps> = ({
  farm,
  removed,
  cakePrice,
  bnbPrice,
  ethPrice,
  account,
  className,
}) => {
  const TranslateString = useI18n();

  const [showExpandableSection, setShowExpandableSection] = useState(false);
  const isCommunityFarm = communityFarms.includes(farm.tokenSymbol);
  // We assume the token name is coin pair + lp e.g. CAKE-BNB LP, LINK-BNB LP,
  // NAR-CAKE LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  const farmImage = farm.lpSymbol.split(" ")[0].toLocaleLowerCase();
  const totalValue: BigNumber = useMemo(() => {
    if (!farm.lpTotalInQuoteToken) {
      return null;
    }
    if (farm.quoteTokenSymbol === QuoteToken.BNB) {
      return bnbPrice.times(farm.lpTotalInQuoteToken);
    }
    if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
      return cakePrice.times(farm.lpTotalInQuoteToken);
    }
    if (farm.quoteTokenSymbol === QuoteToken.GLX) {
      return cakePrice.times(farm.lpTotalInQuoteToken);
    }
    if (farm.quoteTokenSymbol === QuoteToken.ETH) {
      return ethPrice.times(farm.lpTotalInQuoteToken);
    }
    return farm.lpTotalInQuoteToken;
  }, [
    bnbPrice,
    cakePrice,
    ethPrice,
    farm.lpTotalInQuoteToken,
    farm.quoteTokenSymbol,
  ]);

  const totalValueFormated = totalValue
    ? `$${Number(totalValue).toLocaleString(undefined, {
        maximumFractionDigits: 0,
      })}`
    : "-";

  const lpLabel =
    farm.lpSymbol && farm.lpSymbol.toUpperCase().replace("PANCAKE", "");
  const earnLabel = farm.dual ? farm.dual.earnLabel : "GLX";

  const farmAPY =
    farm.apy &&
    farm.apy
      .times(new BigNumber(100))
      .toNumber()
      .toLocaleString("en-US", { maximumFractionDigits: 2 });

  const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses, pid } = farm;
  const { stakedBalance } = useFarmUser(pid);
  const rawStakedBalance = getBalanceNumber(stakedBalance);
  const displayStake = rawStakedBalance.toFixed(4).toLocaleString();
  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAdresses,
    quoteTokenSymbol,
    tokenAddresses,
  });
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`;

  return (
    <div className={className} style={{ maxWidth: "345px", minWidth: "300px" }}>
      <FCard>
        {farm.tokenSymbol === "GLX" && <StyledCardAccent />}
        <CardHeading
          lpLabel={lpLabel}
          multiplier={farm.multiplier}
          isCommunityFarm={isCommunityFarm}
          farmImage={farmImage}
          tokenSymbol={farm.tokenSymbol}
        />

        <CardActionsContainer
          farm={farm}
          account={account}
          addLiquidityUrl={addLiquidityUrl}
        />
        {!removed && (
          <FlexStaked
            justifyContent="space-between"
            alignItems="center"
            className="mx-4"
          >
            <Text fontSize="14px" fontWeight="500" className="small pink-color">
              {TranslateString(736, "APR")}:
            </Text>
            <Text
              fontSize="14px"
              fontWeight="500"
              style={{ display: "flex", alignItems: "center" }}
              className="small text-white"
            >
              {farm.apy ? (
                <>
                  {/* <ApyButton
                    lpLabel={lpLabel}
                    addLiquidityUrl={addLiquidityUrl}
                    cakePrice={cakePrice}
                    apy={farm.apy}
                  /> */}
                  {farmAPY}%
                </>
              ) : (
                <Skeleton height={24} width={80} />
              )}
            </Text>
          </FlexStaked>
        )}
        <Flex className="mx-4 mt-2" justifyContent="space-between">
          <Text fontSize="14px" fontWeight="500" className="small pink-color">
            {TranslateString(318, "Your Stake")}:
          </Text>
          <Text fontSize="14px" fontWeight="500" className="small text-white">
            {displayStake}
          </Text>
        </Flex>
        <Divider style={{ backgroundColor: "#ff1fff", opacity: 0.48 }} />
        <div className="d-flex flex-row justify-content-between px-4">
          <CoreFillButton
          // onClick = {() => {console.log("")}}
          />
          <ExpandableSectionButton
            onClick={() => setShowExpandableSection(!showExpandableSection)}
            expanded={showExpandableSection}
          />
        </div>

        <ExpandingWrapper expanded={showExpandableSection}>
          <DetailsSection
            removed={removed}
            maticExplorerAddress={
              farm.isTokenOnly
                ? `https://testnet.bscscan.com/token/${
                    farm.tokenAddresses[process.env.REACT_APP_CHAIN_ID]
                  }`
                : `https://testnet.bscscan.com/token/${
                    farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]
                  }`
            }
            totalValueFormated={totalValueFormated}
            lpLabel={lpLabel}
            addLiquidityUrl={addLiquidityUrl}
          />
        </ExpandingWrapper>
      </FCard>
    </div>
  );
};

export default FarmCard;
