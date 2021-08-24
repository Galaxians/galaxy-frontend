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
  const displayBalance = rawEarningsBalance.toFixed(4).toLocaleString();

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Heading style={{fontSize: 30, fontWeight: 800}} className="text-white" lineHeight="1" margin="0px">
        {displayBalance}
      </Heading>
      <Button className="btn rounded"
        padding="7px 45px"
        height="auto"
        width="auto"
        disabled={rawEarningsBalance === 0 || pendingTx}
        onClick={async () => {
          setPendingTx(true);
          await onReward();
          setPendingTx(false);
        }}
      >
        {TranslateString(562, "Harvest")}
      </Button>
    </Flex>
  );
};

export default HarvestAction;
