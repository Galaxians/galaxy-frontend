import React from 'react'
import { Button, ButtonProps, useWalletModal } from 'glx-uikit'
import useI18n from 'hooks/useI18n'
import useAuth from 'hooks/useAuth'

const UnlockButton: React.FC<ButtonProps> = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <Button className="pink-gredient rounded" onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Connect Your Wallet')}
    </Button>
  )
}

export default UnlockButton
