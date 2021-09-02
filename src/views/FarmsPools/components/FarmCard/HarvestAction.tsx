import React, { useState } from "react";
import BigNumber from "bignumber.js";
import { Button, Flex, Heading } from "glx-uikit";
import useI18n from "hooks/useI18n";
import { useHarvest } from "hooks/useHarvest";
import { getBalanceNumber } from "utils/formatBalance";

interface FarmCardActionsProps {
  earnings?: BigNumber;
  pid?: number;
}

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid }) => {
  const TranslateString = useI18n();
  const [pendingTx, setPendingTx] = useState(false);
  const { onReward } = useHarvest(pid);

  const rawEarningsBalance = getBalanceNumber(earnings);
  const displayBalance = rawEarningsBalance.toLocaleString();

  return (
    <Button
      className="btn rounded"
      style={{ width: "45%", fontSize: 14, fontWeight: 900 }}
      disabled={rawEarningsBalance === 0 || pendingTx}
      onClick={async () => {
        setPendingTx(true);
        await onReward();
        setPendingTx(false);
      }}
    >
      {TranslateString(562, "Harvest")}
    </Button>
  );
};

export default HarvestAction;
