import React from "react";
import { Button, useWalletModal } from "glx-uikit";
import useAuth from "hooks/useAuth";
import useI18n from "hooks/useI18n";

const HarvestButton = (props) => {
  const TranslateString = useI18n();
  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(login, logout);

  return (
    <Button style={{font: 'normal normal normal 14px/18px Mosk', color: '#FFE4F2', fontWeight: '800', background: 'rgb(52, 52, 52)'}} disabled className="rounded" onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, "Harvest")}
    </Button>
  );
};

export default HarvestButton;
