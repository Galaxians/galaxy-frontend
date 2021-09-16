import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Button, useModal, IconButton, AddIcon, MinusIcon } from "glx-uikit";
import ConnectButton from "./ConnectButton";
import ActionButton from "./ActionButton";
import { useWeb3React } from "@web3-react/core";
import { useFarmUser } from "state/hooks";
import { FarmWithStakedValue } from "views/Farms/components/FarmCard/FarmCard";
import useI18n from "hooks/useI18n";
import { useApprove } from "hooks/useApprove";
import { getBep20Contract } from "utils/contractHelpers";
import { BASE_ADD_LIQUIDITY_URL } from "config";
import getLiquidityUrlPathParts from "utils/getLiquidityUrlPathParts";
import { getBalanceNumber } from "utils/formatBalance";
import useStake from "hooks/useStake";
import useUnstake from "hooks/useUnstake";
import useWeb3 from "hooks/useWeb3";

import DepositModal from "../../DepositModal";
import WithdrawModal from "../../WithdrawModal";
import {
  ActionContainer,
  ActionTitles,
  ActionContent,
  Earned,
  Title,
  Subtle,
} from "./styles";

const CustomActionContainer = styled(ActionContainer)`
  border: 0px;
`
const IconButtonWrapper = styled.div`
  display: flex;
`;

const Staked: React.FunctionComponent<FarmWithStakedValue> = ({
  pid,
  lpSymbol,
  lpAddresses,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
}) => {
  const TranslateString = useI18n();
  const { account } = useWeb3React();
  const [requestedApproval, setRequestedApproval] = useState(false);
  const { allowance, tokenBalance, stakedBalance } = useFarmUser(pid);
  const { onStake } = useStake(pid);
  const { onUnstake } = useUnstake(pid);
  const web3 = useWeb3();

  const isApproved = account && allowance && allowance.isGreaterThan(0);

  const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID];
  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAdresses,
    quoteTokenSymbol,
    tokenAddresses,
  });
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`;
  const rawStakedBalance = getBalanceNumber(stakedBalance);
  const displayBalance = rawStakedBalance.toLocaleString();

  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={lpSymbol}
      addLiquidityUrl={addLiquidityUrl}
    />
  );
  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={lpSymbol}
    />
  );

  const lpContract = getBep20Contract(lpAddress, web3);

  const { onApprove } = useApprove(lpContract);

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true);
      await onApprove();
      setRequestedApproval(false);
    } catch (e) {
      // console.log(e);
    }
  }, [onApprove]);

  if (!account) {
    return (
      <CustomActionContainer>
        <ActionTitles style={{ color: "#ffffff" }}>
          {TranslateString(999, "Start farming")}
        </ActionTitles>
        <ActionContent>
          <ConnectButton style={{ width: "80%"}}/>
        </ActionContent>
      </CustomActionContainer>
    );
  }

  if (isApproved) {
    if (rawStakedBalance) {
      return (
        <CustomActionContainer>
          <ActionTitles>
            <Title>{lpSymbol} </Title>
            <Subtle>{TranslateString(999, "STAKED")}</Subtle>
          </ActionTitles>
          <ActionContent>
            <div>
              <Earned>{displayBalance}</Earned>
            </div>
            <IconButtonWrapper>
              <IconButton
                variant="secondary"
                onClick={onPresentWithdraw}
                mr="6px"
              >
                <MinusIcon color="primary" width="14px" />
              </IconButton>
              <IconButton variant="secondary" onClick={onPresentDeposit}>
                <AddIcon color="primary" width="14px" />
              </IconButton>
            </IconButtonWrapper>
          </ActionContent>
        </CustomActionContainer>
      );
    }

    return (
      <ActionContainer>
        <ActionTitles>
          <Subtle>{TranslateString(999, "STAKE")} </Subtle>
          <Title>{lpSymbol}</Title>
        </ActionTitles>
        <ActionContent>
          <Button width="100%" onClick={onPresentDeposit} variant="secondary">
            {TranslateString(999, "Stake LP")}
          </Button>
        </ActionContent>
      </ActionContainer>
    );
  }

  return (
    <CustomActionContainer>
      <ActionTitles style={{ color: "#ffffff" }}>
        {TranslateString(999, "Eable Farm")}
      </ActionTitles>
      <ActionContent>
        <ActionButton
          width="80%"
          disabled={requestedApproval}
          onClick={handleApprove}
          variant="secondary"
        >
          {TranslateString(999, "Enable")}
        </ActionButton>
      </ActionContent>
    </CustomActionContainer>
  );
};

export default Staked;
