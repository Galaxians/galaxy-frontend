/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */
import React, { useState, useCallback } from "react";
import { Currency, Pair } from "@pancakeswap-libs/sdk";
import { Button, ChevronDownIcon, Text } from "glx-uikit";
import styled from "styled-components";
import { darken } from "polished";
import useI18n from "../../hooks/useI18n";
import { useCurrencyBalance } from "../../state/wallet/hooks";
import CurrencySearchModal from "../SearchModal/CurrencySearchModal";
import CurrencyLogo from "../CurrencyLogo";
import DoubleCurrencyLogo from "../DoubleLogo";
import { RowBetween } from "../Row";
import { Input as NumericalInput } from "../NumericalInput";
import { useActiveWeb3React } from "../../hooks";

const InputRow = styled.div<{ selected: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: ${({ selected }) => (selected ? "0.5rem 1rem" : "0.5rem 1rem")};
`;
const CurrencySelect = styled.button<{ selected: boolean }>`
  align-items: center;
  height: 34px;
  font-size: 16px;
  font-weight: 500;
  background-color: #ff00ff;
  color: ${({ selected, theme }) => (selected ? theme.colors.text : "#FFFFFF")};
  background-color: ${({ selected, theme }) =>
    selected ? darken(0.05, theme.colors.input) : ""};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  user-select: none;
  border: none;
  padding: 0 0.5rem;
  :focus,
  :hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.input)};
  }
`;
const LabelRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 1rem 0 1rem;
  span:hover {
    cursor: pointer;
    color: ${({ theme }) => darken(0.2, theme.colors.textSubtle)};
  }
`;
const Aligner = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InputPanel = styled.div<{ hideInput?: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: ${({ hideInput }) => (hideInput ? "8px" : "8px")};
  background-color: #271048;
  //background-color: ${({ theme }) => theme.colors.background};
  z-index: 1;
`;
const Container = styled.div<{ hideInput: boolean }>`
  border-radius: 8px;
  //background-color: ${({ theme }) => theme.colors.input};
  box-shadow: ${({ theme }) => theme.shadows.inset};
`;
interface CurrencyInputPanelProps {
  value: string;
  onUserInput: (value: string) => void;
  onMax?: () => void;
  showMaxButton: boolean;
  label?: string;
  onCurrencySelect?: (currency: Currency) => void;
  currency?: Currency | null;
  disableCurrencySelect?: boolean;
  hideBalance?: boolean;
  pair?: Pair | null;
  hideInput?: boolean;
  otherCurrency?: Currency | null;
  id: string;
  showCommonBases?: boolean;
}
export default function CurrencyInputPanel({
  value,
  onUserInput,
  onMax,
  showMaxButton,
  label,
  onCurrencySelect,
  currency,
  disableCurrencySelect = false,
  hideBalance = false,
  pair = null, // used for double token logo
  hideInput = false,
  otherCurrency,
  id,
  showCommonBases,
}: CurrencyInputPanelProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { account } = useActiveWeb3React();
  const selectedCurrencyBalance = useCurrencyBalance(
    account ?? undefined,
    currency ?? undefined
  );
  const TranslateString = useI18n();
  const handleDismissSearch = useCallback(() => {
    setModalOpen(false);
  }, [setModalOpen]);
  const show_currency =
    currency && currency.symbol && currency.symbol.length > 20
      ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
          currency.symbol.length - 5,
          currency.symbol.length
        )}`
      : currency?.symbol;

  return (
    <InputPanel id={id}>
      <Container hideInput={hideInput}>
        <div className="row">
          <div
            className="col-auto"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignSelf: "center",
              marginLeft: "8px",
              height: "48px",
              paddingRight: "0px",
            }}
          >
            <CurrencySelect
              style={{ textAlign: "left", fontFamily: "Mosk" }}
              selected={!!currency}
              className="symbol-input"
              onClick={() => {
                if (!disableCurrencySelect) {
                  setModalOpen(true);
                }
              }}
            >
              <Aligner>
                {pair ? (
                  <DoubleCurrencyLogo
                    currency0={pair.token0}
                    currency1={pair.token1}
                    size={16}
                    margin
                  />
                ) : currency ? (
                  <CurrencyLogo
                    currency={currency}
                    size="24px"
                    style={{ marginRight: "8px", padding: "3px" }}
                  />
                ) : null}
                {pair ? (
                  <Text>
                    {pair?.token0.symbol}:{pair?.token1.symbol}
                  </Text>
                ) : (
                  <Text
                    className="nav-menu-item"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      fontFamily: "Mosk",
                    }}
                  >
                    {(currency && currency.symbol && currency.symbol.length > 20
                      ? `${currency.symbol.slice(
                          0,
                          4
                        )}...${currency.symbol.slice(
                          currency.symbol.length - 5,
                          currency.symbol.length
                        )}`
                      : currency?.symbol) || (
                      <span className="response-font">
                        {TranslateString(1196, "Select a Token")}
                      </span>
                    )}
                  </Text>
                )}
                {!disableCurrencySelect && (
                  <ChevronDownIcon style={{ width: "15px" }} />
                )}
              </Aligner>
            </CurrencySelect>
            {account && (
              <LabelRow style={{ padding: "0px" }}>
                <RowBetween>
                  {/* <Text fontSize="14px">{translatedLabel}</Text> */}
                  {account && currency && (
                    <Text
                      onClick={onMax}
                      className="res-text"
                      style={{
                        marginLeft: "4px",
                        marginTop: "4px",
                        display: "inline",
                        cursor: "pointer",
                        fontFamily: "Mosk",
                      }}
                    >
                      {!hideBalance && !!currency && selectedCurrencyBalance
                        ? `Balance: ${selectedCurrencyBalance?.toSignificant(
                            6
                          )} ${show_currency}`
                        : " -"}
                    </Text>
                  )}
                </RowBetween>
              </LabelRow>
            )}
            {!account && (
              <LabelRow style={{ padding: "0px" }}>
                <RowBetween>
                  {currency && (
                    <Text
                      onClick={onMax}
                      className="res-text"
                      style={{
                        marginLeft: "4px",
                        marginTop: "4px",
                        display: "inline",
                        cursor: "pointer",
                        fontFamily: "Mosk",
                      }}
                    >
                      {`Balance: 1.5 ${show_currency}`}
                    </Text>
                  )}
                </RowBetween>
              </LabelRow>
            )}
          </div>

          <div className="col-auto p-2 swap-input">
            <div
              className="dark-input rounded fs-2"
              style={{ marginRight: "10px" }}
            >
              <InputRow
                style={hideInput ? { padding: "0px", borderRadius: "8px" } : {}}
                selected={disableCurrencySelect}
              >
                {!hideInput && (
                  <>
                    <NumericalInput
                      className="token-amount-input"
                      value={value}
                      onUserInput={(val) => {
                        onUserInput(val);
                      }}
                    />
                    {account && currency && showMaxButton && label !== "To" && (
                      <Button
                        onClick={onMax}
                        scale="sm"
                        variant="text"
                        style={{ height: "auto", fontFamily: "Mosk" }}
                      >
                        MAX
                      </Button>
                    )}
                  </>
                )}
              </InputRow>
            </div>
          </div>
        </div>
      </Container>
      {!disableCurrencySelect && onCurrencySelect && (
        <CurrencySearchModal
          isOpen={modalOpen}
          onDismiss={handleDismissSearch}
          onCurrencySelect={onCurrencySelect}
          selectedCurrency={currency}
          otherSelectedCurrency={otherCurrency}
          showCommonBases={showCommonBases}
        />
      )}
    </InputPanel>
  );
}
