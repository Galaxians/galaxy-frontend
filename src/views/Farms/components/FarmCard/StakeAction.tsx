import React from "react";
import styled from "styled-components";
import BigNumber from "bignumber.js";
import {
  Button,
  Text,
  Flex,
  Heading,
  IconButton,
  AddIcon,
  MinusIcon,
  useModal,
} from "glx-uikit";
import useI18n from "hooks/useI18n";
import useStake from "hooks/useStake";
import useUnstake from "hooks/useUnstake";
import { getBalanceNumber } from "utils/formatBalance";
import DepositModal from "../DepositModal";
import WithdrawModal from "../WithdrawModal";
import ActionButton from "./ActionButton";

interface FarmCardActionsProps {
  stakedBalance?: BigNumber;
  tokenBalance?: BigNumber;
  tokenName?: string;
  pid?: number;
  addLiquidityUrl?: string;
}

const IconButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 20px;
  }
`;

const StakeAction: React.FC<FarmCardActionsProps> = ({
  stakedBalance,
  tokenBalance,
  tokenName,
  pid,
  addLiquidityUrl,
}) => {
  const TranslateString = useI18n();
  const { onStake } = useStake(pid);
  const { onUnstake } = useUnstake(pid);

  const rawStakedBalance = getBalanceNumber(stakedBalance);
  const displayBalance = rawStakedBalance.toLocaleString();

  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={tokenName}
      addLiquidityUrl={addLiquidityUrl}
    />
  );
  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={tokenName}
    />
  );
  return (
    <div className="mt-5">
      {rawStakedBalance !== 0 ? (
        <Flex height="60px" justifyContent="space-between" alignItems="center">
          <div>
            <Heading
              textAlign="left"
              color={rawStakedBalance === 0 ? "textDisabled" : "text"}
            >
              {displayBalance}
            </Heading>
            <Flex>
              <Text
                textTransform="uppercase"
                color="secondary"
                fontSize="14px"
                fontWeight="300"
                pr="3px"
              >
                {tokenName}
              </Text>
              <Text color="textSubtle" fontWeight="300" fontSize="14px">
                {TranslateString(1074, "Staked")}
              </Text>
            </Flex>
          </div>
          {rawStakedBalance === 0 ? (
            <ActionButton
              style={{ width: "80%" }}
              onClick={onPresentDeposit}
              className="btn"
            >
              {TranslateString(999, "Stake LP")}
            </ActionButton>
          ) : (
            <IconButtonWrapper>
              <IconButton
                variant="tertiary"
                onClick={onPresentWithdraw}
                mr="6px"
              >
                <MinusIcon color="primary" width="14px" />
              </IconButton>
              <IconButton variant="tertiary" onClick={onPresentDeposit}>
                <AddIcon color="primary" width="14px" />
              </IconButton>
            </IconButtonWrapper>
          )}
        </Flex>
      ) : (
        <Flex
          alignItems="center"
          justifyContent="center"
          style={{ height: "60px" }}
        >
          <ActionButton
            style={{ width: "80%" }}
            onClick={onPresentDeposit}
            className="btn"
          >
            {TranslateString(999, "Stake LP")}
          </ActionButton>
        </Flex>
      )}
    </div>
  );
};

export default StakeAction;
