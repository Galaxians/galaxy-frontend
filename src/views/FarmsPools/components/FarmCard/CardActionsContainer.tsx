import React, { useState, useCallback } from "react";
import BigNumber from "bignumber.js";
import styled from "styled-components";
import { getAddress } from "utils/addressHelpers";
import { getBep20Contract } from "utils/contractHelpers";
import { Button, Flex, Text } from "glx-uikit";
import { Farm } from "state/types";
import { useFarmFromSymbol, useFarmUser } from "state/hooks";
import useI18n from "hooks/useI18n";
import useWeb3 from "hooks/useWeb3";
import { useApprove } from "hooks/useApprove";
import UnlockButton from "components/UnlockButton";
import HarvestButton from "components/HarvestButton";
import { getBalanceNumber } from "utils/formatBalance";
import StakeAction from "./StakeAction";
import HarvestAction from "./HarvestAction";

const Action = styled.div`
  padding-top: 16px;
  // margin: 0px 24px;
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
      <Button
        ml="8px"
        padding="7px 45px"
        height="auto"
        width="auto"
        disabled={requestedApproval}
        onClick={handleApprove}
        className="btn rounded"
      >
        <Text
          color="#FFE4F2"
          fontSize="14px"
          fontWeight="800"
          letterSpacing="0px"
          lineHeight="18px"
        >
          {TranslateString(758, `Approve ${lpName}`)}
        </Text>
      </Button>
    );
  };

  const rawEarningsBalance = getBalanceNumber(earnings);
  const displayBalance = rawEarningsBalance.toFixed(4).toLocaleString();
  return (
    <Action>
      <Flex justifyContent="space-between" mb="3" alignItems="flex-end">
        <FlexStaked
          flexDirection="column"
          justifyItems="self-start"
          marginLeft="24px"
        >
          <Text
            fontSize="30px"
            fontWeight="800"
            textAlign="left"
            mb="2"
            className="text-white"
            lineHeight="1"
            margin="0px"
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

        {/* <Flex>
          <Text
            textTransform="uppercase"
            color="secondary"
            fontSize="14px"
            fontWeight="300"
            pr="3px"
          >
            {lpName}
          </Text>
          <Text fontSize="14px" fontWeight="300" textTransform="uppercase" color="textSubtle">
            {TranslateString(1074, "Staked")}
          </Text>
        </Flex> */}
      </Flex>

      <Flex justifyContent="center">
        {/* <HarvestAction earnings={earnings} pid={pid} /> */}
        {!account ? (
          <>
            <HarvestButton padding="10px 60px" width="30%" marginRight="10px" />
            <UnlockButton padding="10px 60px" width="30%" marginLeft="10px" />
          </>
        ) : (
          renderApprovalOrStakeButton()
        )}
      </Flex>
    </Action>
  );
};

export default CardActions;
