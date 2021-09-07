import React, { useMemo, useState } from "react";
import BigNumber from "bignumber.js";
import styled, { keyframes } from "styled-components";
import { Flex, Text, Skeleton } from "glx-uikit";
import { communityFarms } from "config/constants";
import { Farm } from "state/types";
import useI18n from "hooks/useI18n";
import ExpandableSectionButton from "components/ExpandableSectionButton";
import { QuoteToken } from "config/constants/types";
import { BASE_ADD_LIQUIDITY_URL } from "config";
import getLiquidityUrlPathParts from "utils/getLiquidityUrlPathParts";
import DetailsSection from "./DetailsSection";
import CardHeading from "./CardHeading";
import CardActionsContainer from "./CardActionsContainer";
import ApyButton from "./ApyButton";

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber;
  liquidity?: BigNumber;
}

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

const FCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  // background: #0B001E 0% 0% no-repeat padding-box;
  border: 1px solid #ff1fff;
  border-radius: 11px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1),
    0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 26px 0px;
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

  const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses } = farm;
  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAdresses,
    quoteTokenSymbol,
    tokenAddresses,
  });
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`;

  return (
    <div className={className} style={{ maxWidth: 345, minWidth: 300 }}>
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

        <div style={{ margin: "0 26px" }}>
          {!removed && (
            <FlexStaked justifyContent="space-between" alignItems="center">
              <Text
                fontSize="14px"
                fontWeight="500"
                className="small pink-color"
              >
                {TranslateString(736, "APR")}:
              </Text>
              <Text
                style={{ display: "flex", alignItems: "center" }}
                fontSize="14px"
                fontWeight="500"
                className="small text-white"
              >
                {farm.apy ? (
                  <>
                    <ApyButton
                      lpLabel={lpLabel}
                      addLiquidityUrl={addLiquidityUrl}
                      cakePrice={cakePrice}
                      apy={farm.apy}
                    />
                    {farmAPY}%
                  </>
                ) : (
                  <Skeleton height={24} width={80} />
                )}
              </Text>
            </FlexStaked>
          )}
          <Flex justifyContent="space-between">
            <Text fontSize="14px" fontWeight="500" className="pink-color">
              {TranslateString(318, "Earn")}:
            </Text>
            <Text fontSize="14px" fontWeight="500" className="text-white">
              {earnLabel}
            </Text>
          </Flex>
        </div>

        <Divider style={{ backgroundColor: "#ff1fff", opacity: 0.48 }} />
        <ExpandableSectionButton
          onClick={() => setShowExpandableSection(!showExpandableSection)}
          expanded={showExpandableSection}
        />
        <ExpandingWrapper expanded={showExpandableSection}>
          <DetailsSection
            removed={removed}
            maticExplorerAddress={`https://bscscan.com/address/${
              farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]
            }`}
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
