import React from "react";
import styled from "styled-components";

export interface EarnedProps {
  earnings: number;
  pid: number;
}

const Amount = styled.span<{ earned: number }>`
  // color: ${({ earned, theme }) =>
    earned ? theme.colors.text : theme.colors.textDisabled};
  color: white;
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const Earned: React.FunctionComponent<EarnedProps> = ({ earnings }) => {
  const displayBalance = earnings !== null ? earnings.toLocaleString() : "?";

  return <Amount earned={earnings}>{displayBalance}</Amount>;
};

export default Earned;
