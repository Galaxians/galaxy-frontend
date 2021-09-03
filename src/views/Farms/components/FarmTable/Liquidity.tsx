import React from "react";
import styled from "styled-components";
import { HelpIcon, Text } from "glx-uikit";
import useI18n from "hooks/useI18n";

import Tooltip from "../Tooltip/Tooltip";

export interface LiquidityProps {
  liquidity: number;
}

const LiquidityWrapper = styled.div`
  min-width: 110px;
  text-align: right;
  ${({ theme }) => theme.mediaQueries.sm} {
    text-align: left;
  }
  font-size: 22px;
  font-weight: 500;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 14px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    svg {
      margin-left: 0;
    }
  }
`;

const Liquidity: React.FunctionComponent<LiquidityProps> = ({ liquidity }) => {
  // console.log("liquidity", liquidity);
  const displayLiquidity = liquidity
    ? `$${Number(liquidity).toLocaleString(undefined, {
        maximumFractionDigits: 0,
      })}`
    : "-";
  const TranslateString = useI18n();

  return (
    <Container>
      <LiquidityWrapper>{displayLiquidity}</LiquidityWrapper>
    </Container>
  );
};

export default Liquidity;
