import React, { useState, useCallback } from "react";
import BigNumber from "bignumber.js";
import styled from "styled-components";
import { getAddress } from "utils/addressHelpers";
import { getBep20Contract } from "utils/contractHelpers";
import { Flex, Text } from "glx-uikit";
import { Farm } from "state/types";
import { useFarmFromSymbol, useFarmUser } from "state/hooks";
import useI18n from "hooks/useI18n";
import useWeb3 from "hooks/useWeb3";
import { useApprove } from "hooks/useApprove";
import UnlockButton from "components/UnlockButton";
import HarvestButton from "components/HarvestButton";
import { getBalanceNumber } from "utils/formatBalance";
import StakeAction from "./StakeAction";
import ActionButton from "./ActionButton";

const Action = styled.div`
  margin: 26px 26px 0;
`;

const FlexStaked = styled(Flex)`
  margin-bottm: 36px;
  @media (max-width: 500px) {
    margin-bottm: 0px;
  }
`;
export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber;
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue;
  account?: string;
  addLiquidityUrl?: string;
}

const CardActions: React.FC<FarmCardActionsProps> = ({
  farm,
  account,
  addLiquidityUrl,
}) => {
  const TranslateString = useI18n();
  const [requestedApproval, setRequestedApproval] = useState(false);
  const { pid, tokenAddresses } = useFarmFromSymbol(farm.lpSymbol);
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid);
  const lpAddress = getAddress(tokenAddresses);
  const lpName = farm.lpSymbol.toUpperCase();
  const isApproved = account && allowance && allowance.isGreaterThan(0);
  const web3 = useWeb3();

  const lpContract = getBep20Contract(lpAddress, web3);

  const { onApprove } = useApprove(lpContract);

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true);
      await onApprove();
      setRequestedApproval(false);
    } catch (e) {
      console.error(e);
    }
  }, [onApprove]);

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={lpName}
        pid={pid}
        addLiquidityUrl={addLiquidityUrl}
      />
    ) : (
      <ActionButton
        disabled={requestedApproval}
        onClick={handleApprove}
        className="btn"
      >
        {TranslateString(758, `Approve ${lpName}`)}
      </ActionButton>
    );
  };

  const rawEarningsBalance = getBalanceNumber(earnings);
  const displayBalance = rawEarningsBalance.toFixed(4).toLocaleString();
  return (
    <Action>
      <Flex justifyContent="space-between" mb="36px" alignItems="flex-end">
        <FlexStaked flexDirection="column" justifyItems="self-start">
          <Text
            fontSize="30px"
            fontWeight="800"
            textAlign="left"
            mb="1"
            className="text-white"
            lineHeight="37px"
          >
            {displayBalance}
          </Text>
          <Flex>
            <Text
              className="pink-color"
              textTransform="uppercase"
              fontSize="14px"
              fontWeight="300"
              pr="3px"
            >
              {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
              {/* GLAXIA */}
              {lpName}
            </Text>
            <Text className="pink-color" fontWeight="300" fontSize="14px">
              {TranslateString(1072, "earned")}
            </Text>
          </Flex>
        </FlexStaked>
      </Flex>

      {!account ? (
        <Flex justifyContent="center">
          <HarvestButton padding="10px 60px" width="30%" marginRight="10px" />
          <UnlockButton padding="10px 60px" width="30%" marginLeft="10px" />
        </Flex>
      ) : (
        renderApprovalOrStakeButton()
      )}
    </Action>
  );
};

export default CardActions;
