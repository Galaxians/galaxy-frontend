import React from "react";
import BigNumber from "bignumber.js";
import { Heading } from "glx-uikit";
import { getBalanceNumber } from "utils/formatBalance";

interface FarmCardActionsProps {
  earnings?: BigNumber;
  pid?: number;
}

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid }) => {
  const rawEarningsBalance = getBalanceNumber(earnings);
  const displayBalance = rawEarningsBalance.toFixed(4).toLocaleString();

  return (
    <Heading
      style={{ fontSize: 30, fontWeight: 800, textAlign: "left" }}
      className="text-white"
      lineHeight="17px"
      mb="4px"
    >
      {displayBalance}
    </Heading>
  );
};

export default HarvestAction;
