import React from "react";
import { Button, useWalletModal, Text } from "glx-uikit";
import useAuth from "hooks/useAuth";
import useI18n from "hooks/useI18n";
import styled from "styled-components";

const CustomButton =  styled(Button)`
  border-radius: 8px;
  height: fit-content;
  padding: 8px 39px;
  color: #ffe4f2;
  letter-spacing: 0;
  line-height: 18px;
  font: normal normal medium 19px/22px Mosk;
  &:hover {
    color: #ffe3f2 !important;
  }
`;
const ConnectButton = (props) => {
  const TranslateString = useI18n();
  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(login, logout);

  return (
    <CustomButton
      onClick={onPresentConnectModal}
      {...props}
    >
      {TranslateString(292, "Connect wallet")}
    </CustomButton>
  );
};

export default ConnectButton;
