/* eslint-disable import/no-unresolved */
/* eslint-disable no-nested-ternary */
import React, { useContext, useMemo, useState } from "react";
import { ThemeContext } from "styled-components";
import { Pair } from "@pancakeswap-libs/sdk";
import { Button, CardBody, Text } from "glx-uikit";
import { Link } from "react-router-dom";
import CardNav from "components/CardNav";
import Question from "components/QuestionHelper";
import FullPositionCard from "components/PositionCard";
import { useTokenBalancesWithLoadingIndicator } from "state/wallet/hooks";
import { StyledInternalLink } from "components/Shared";
import { LightCard } from "components/Card";
import { RowBetween } from "components/Row";
import { AutoColumn } from "components/Column";

import { useActiveWeb3React } from "hooks";
import { usePairs } from "data/Reserves";
import { toV2LiquidityToken, useTrackedTokenPairs } from "state/user/hooks";
import { Dots } from "components/swap/styleds";
import useI18n from "hooks/useI18n";
import LeftSidebar from "pagecomponent/LeftSidebar";
import AppBody from "../AppBody";
import { SwapWrapper } from "../SwapWrapper";

export default function Pool() {
  const theme = useContext(ThemeContext);
  const { account } = useActiveWeb3React();
  const TranslateString = useI18n();

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs();
  const tokenPairsWithLiquidityTokens = useMemo(
    () =>
      trackedTokenPairs.map((tokens) => ({
        liquidityToken: toV2LiquidityToken(tokens),
        tokens,
      })),
    [trackedTokenPairs]
  );
  const liquidityTokens = useMemo(
    () => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken),
    [tokenPairsWithLiquidityTokens]
  );
  const [v2PairsBalances, fetchingV2PairBalances] =
    useTokenBalancesWithLoadingIndicator(account ?? undefined, liquidityTokens);

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan("0")
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances]
  );

  const v2Pairs = usePairs(
    liquidityTokensWithBalances.map(({ tokens }) => tokens)
  );
  const v2IsLoading =
    fetchingV2PairBalances ||
    v2Pairs?.length < liquidityTokensWithBalances.length ||
    v2Pairs?.some((V2Pair) => !V2Pair);

  const allV2PairsWithLiquidity = v2Pairs
    .map(([, pair]) => pair)
    .filter((v2Pair): v2Pair is Pair => Boolean(v2Pair));

  const [handleLeft, changeHandleLeft] = useState(false);
  const [handleRight, changeHandleRight] = useState(false);

  const fhandleLeft = () => {
    changeHandleLeft(!handleLeft);
  };

  const fhandleRight = () => {
    changeHandleRight(!handleRight);
  };

  return (
    <SwapWrapper>
      {/* <RightSidebar isOpen={!handleRight} toggle={fhandleRight} /> */}
      <LeftSidebar isOpen={handleLeft} toggle={fhandleLeft} />
      <AppBody>
        <CardNav activeIndex={1} />
        {/* <PageHeader title={TranslateString(262, '')} description={TranslateString(1168, '')}>

        </PageHeader> */}
        <Button
          className="p-gradient liquidity_btn"
          id="join-pool-button"
          as={Link}
          to="/add/BNB"
        >
          {TranslateString(168, "Add Liquidity")}
        </Button>
        <AutoColumn justify="center">
          <AutoColumn gap="12px" style={{ width: "100%" }}>
            <RowBetween padding="10px 0px">
              <Text color={theme.colors.text}>
                {TranslateString(107, "Your Liquidity")}
              </Text>
              <Question
                text={TranslateString(
                  1170,
                  "When you add liquidity, you are given pool tokens that represent your share. If you don’t see a pool you joined in this list, try importing a pool below."
                )}
              />
            </RowBetween>

            {!account ? (
              <LightCard
                style={{
                  width: "100%",
                  borderRadius: "6px",
                  borderColor: "#696272",
                  background: "#696272 0% 0% no-repeat padding-box",
                  opacity: "0.33",
                }}
                padding="40px"
              >
                <Text style={{ color: "white" }} textAlign="center">
                  {TranslateString(
                    156,
                    "Connect to a wallet to view your liquidity."
                  )}
                </Text>
              </LightCard>
            ) : v2IsLoading ? (
              <LightCard padding="40px">
                <Text style={{ color: "white" }} textAlign="center">
                  <Dots>Loading</Dots>
                </Text>
              </LightCard>
            ) : allV2PairsWithLiquidity?.length > 0 ? (
              <>
                {allV2PairsWithLiquidity.map((v2Pair) => (
                  <FullPositionCard
                    key={v2Pair.liquidityToken.address}
                    pair={v2Pair}
                  />
                ))}
              </>
            ) : (
              <LightCard padding="40px">
                <Text style={{ color: "white" }} textAlign="center">
                  {TranslateString(104, "No liquidity found.")}
                </Text>
              </LightCard>
            )}

            <div>
              <Text fontSize="14px" style={{ padding: ".5rem 0 .5rem 0" }}>
                {TranslateString(106, "Don't see a pool you joined?")}{" "}
                <StyledInternalLink id="import-pool-link" to="/find">
                  {TranslateString(108, "Import it.")}
                </StyledInternalLink>
              </Text>
              <Text fontSize="14px" style={{ padding: ".5rem 0 .5rem 0" }}>
                {TranslateString(
                  1172,
                  "Or, if you staked your LP tokens in a farm, unstake them to see them here."
                )}
              </Text>
            </div>
          </AutoColumn>
        </AutoColumn>
      </AppBody>
    </SwapWrapper>
  );
}
