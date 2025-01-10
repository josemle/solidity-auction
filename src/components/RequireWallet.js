import { Alert } from '@mui/material'
import React from 'react'

export default function RequireWallet({ children }) {
  if (!isWalletPluginInstalled()) {
    return (
      <Alert severity="warning">
        No Ethereum wallet installed. Please install a wallet and refresh the
        page.
      </Alert>
    )
  }

  return children
}

function isWalletPluginInstalled() {
  return !!window.ethereum
}
