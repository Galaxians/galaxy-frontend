import React from "react";
import styled from "styled-components";
import { HelpIcon } from "glx-uikit";
import useI18n from "hooks/useI18n";

import Tooltip from "../Tooltip/Tooltip";

export interface MultiplierProps {
  multiplier: string;
}

const MultiplierWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  width: 36px;
  text-align: right;
  font-size: 22px;
  font-weight: 500;
  ${({ theme }) => theme.mediaQueries.sm} {
    text-align: left;
  }
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

const Multiplier: React.FunctionComponent<MultiplierProps> = ({
  multiplier,
}) => {
  const displayMultipler = multiplier ? multiplier.toLowerCase() : "-";
  const TranslateString = useI18n();

  return (
    <Container>
      <MultiplierWrapper>{displayMultipler}</MultiplierWrapper>
    </Container>
  );
};

export default Multiplier;
