import React, { useState, useCallback } from "react";
import BigNumber from "bignumber.js";
import styled from "styled-components";
import { provider as ProviderType } from "web3-core";
import { getAddress } from "utils/addressHelpers";
import { getBep20Contract } from "utils/contractHelpers";
import { Button, Flex, Text } from "glx-uikit";
import { Farm } from "state/types";
import { useFarmFromSymbol, useFarmUser } from "state/hooks";
import useI18n from "hooks/useI18n";
import useWeb3 from "hooks/useWeb3";
import { useApprove } from "hooks/useApprove";
import UnlockButton from "components/UnlockButton";
import { useHarvest } from "hooks/useHarvest";
import { getBalanceNumber } from "utils/formatBalance";
import StakeAction from "./StakeAction";
import HarvestAction from "./HarvestAction";

const Action = styled.div`
  padding-top: 16px;
  margin: 0px 24px;
`;

const BtnDiv = styled.div`
  display: flex;
`
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
  const { pid, lpAddresses } = useFarmFromSymbol(farm.lpSymbol);
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid);
  const lpAddress = getAddress(lpAddresses);
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

  const [pendingTx, setPendingTx] = useState(false);
  const { onReward } = useHarvest(pid);
  const rawEarningsBalance = getBalanceNumber(earnings);

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
        padding="7px 45px"
        height="auto"
        width="auto"
        disabled={requestedApproval}
        onClick={handleApprove}
        className="btn rounded"
      >
        <Text color ="#FFE4F2" fontSize="14px" fontWeight="400" letterSpacing="0px" lineHeight="18px">{TranslateString(758, "Approve Contract")}</Text>
      </Button>
    );
  };

  return (
    <Action>
      <HarvestAction earnings={earnings} pid={pid} />
      <Flex>
        <Text className="pink-color"          
          textTransform="uppercase"          
          fontSize="14px"
          fontWeight="300"
          pr="3px"
        >
          {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
          {/* GLAXIA */}
          {lpName}
        </Text>
        <Text className="pink-color " fontWeight="300" fontSize="14px">
          {TranslateString(1072, "Earned")}
        </Text>
      </Flex>
      
      <Flex marginBottom="36px">
        <Text
          
          textTransform="uppercase"
          color="secondary"
          fontSize="12px"
          pr="3px"
        >
          {lpName}
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {TranslateString(1074, "Staked")}
        </Text>
      </Flex>
      {!account ? (
        <BtnDiv>
              <Button className="btn rounded"
              style={{font: 'normal normal normal 14px/18px Mosk', color: '#FFE4F2', fontWeight: 800, marginTop: '8px', marginRight: '8px'}} 
              disabled={rawEarningsBalance === 0 || pendingTx}
              padding="5px 40px"
              height="auto"
              width="auto"
              onClick={async () => {
                setPendingTx(true);
                await onReward();
                setPendingTx(false);
              }}
            >
              {TranslateString(562, "Harvest")}
            </Button>
            <UnlockButton mt="8px" ml="8px"/>
        </BtnDiv>
      ) : (
        renderApprovalOrStakeButton()
      )}
    </Action>
  );
};
export default CardActions;
