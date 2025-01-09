import { Card, CardContent, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import BidInput from './BidInput'

export default function Auction() {
  const [contractState, setContractInfo] = useState({
    highestBid: 1.2,
    totalBids: 85,
    deadline: Date.now() / 1000,
    accountBid: 1
  })

  return (
    <>
      {renderContractState(contractState)}
      {renderInputs(contractState)}
    </>
  )
}

function renderContractState(contractState) {
  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" variant="overline">
              Highest bid
            </Typography>
            <Typography variant="h4">{contractState.highestBid} ETH</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" variant="overline">
              Total bids
            </Typography>
            <Typography variant="h4">{contractState.totalBids}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" variant="overline">
              Ends at
            </Typography>
            <Typography variant="h4">
              {formatDate(contractState.deadline)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" variant="overline">
              You've contributed
            </Typography>
            <Typography variant="h4">{contractState.accountBid} ETH</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

function formatDate(seconds) {
  return new Date(seconds * 1000).toISOString().substring(0, 16)
}

function renderInputs(contractState) {
  return <BidInput contractState={contractState} />
}
