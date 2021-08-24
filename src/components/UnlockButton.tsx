import React from "react";
import { Button, useWalletModal, Text } from "glx-uikit";
import useAuth from "hooks/useAuth";
import useI18n from "hooks/useI18n";

const UnlockButton = (props) => {
  const TranslateString = useI18n();
  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(login, logout);

  return (
    <Button height="auto" width="auto" style={{font: 'normal normal normal 14px/18px Mosk', color: '#FFE4F2'}} padding="7px 45px" className="rounded" onClick={onPresentConnectModal} {...props}>
      <Text color ="#FFE4F2" fontSize="14px" fontWeight="400" letterSpacing="0px" lineHeight="18px">{TranslateString(292, "Unlock Wallet")}</Text>
    </Button>
  );
};

export default UnlockButton;
