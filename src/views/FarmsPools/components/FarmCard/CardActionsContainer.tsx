import React, { useState, useCallback } from "react";
import BigNumber from "bignumber.js";
import styled from "styled-components";
import { provider as ProviderType } from "web3-core";
import { getAddress } from "utils/addressHelpers";
import { getBep20Contract } from "utils/contractHelpers";
import { Button, Flex, Text, Heading } from "glx-uikit";
import { Farm } from "state/types";
import { useFarmFromSymbol, useFarmUser } from "state/hooks";
import useI18n from "hooks/useI18n";
import useWeb3 from "hooks/useWeb3";
import { useApprove } from "hooks/useApprove";
import UnlockButton from "components/UnlockButton";
import { getBalanceNumber } from "utils/formatBalance";
import StakeAction from "./StakeAction";
import HarvestAction from "./HarvestAction";

const Action = styled.div`
  padding-top: 16px;
`;
export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber;
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue;
  provider?: ProviderType;
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
      <Button
        width="76%"
        className="btn rounded mt-5 mb-4"
        disabled={requestedApproval}
        onClick={handleApprove}
      >
        {TranslateString(758, "Approve Contract")}
      </Button>
    );
  };

  const rawEarningsBalance = getBalanceNumber(earnings);
  const displayBalance = rawEarningsBalance.toLocaleString();
  return (
    <Action>
      <Flex justifyContent="space-between" mb="3" alignItems="flex-end" >
        <Flex flexDirection="column" justifyItems="self-start" >
          <Heading textAlign="left" mb="2" color={rawEarningsBalance === 0 ? "textDisabled" : "text"}>
            {displayBalance}
          </Heading>
          <Flex>
            <Text
              className="pink-color"
              textTransform="uppercase"
              fontSize="14px"
              pr="3px"
            >
              {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
              GLX
            </Text>
            <Text className="pink-color" fontSize="14px">
              {TranslateString(1072, "Earned")}
            </Text>
          </Flex>
          
        </Flex>

        <Flex>
          <Text
            textTransform="uppercase"
            color="secondary"
            fontSize="14px"
            pr="3px"
          >
            {lpName}
          </Text>
          <Text bold textTransform="uppercase" color="textSubtle" fontSize="14px">
            {TranslateString(1074, "Staked")}
          </Text>
        </Flex>
      </Flex>
      
      <Flex justifyContent="space-between">
        <HarvestAction earnings={earnings} pid={pid} />
        {!account ? (
          <UnlockButton ml="8px" width="45%" />
        ) : (
          renderApprovalOrStakeButton()
        )}
      </Flex>
      
    </Action>
  );
};

export default CardActions;
