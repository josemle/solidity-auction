import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/TextField'
import React, { useState } from 'react'

export default function BidInput(props) {
  const [bidAmount, setBidAmount] = useState('')

  const { contractState } = props

  function isValidNumber(num) {
    return !isNaN(num)
  }

  function canBeWinningBid() {
    return (
      Number(bidAmount) + contractState.accountBid > contractState.highestBid
    )
  }

  const validBid = isValidNumber(bidAmount) && canBeWinningBid()

  return (
    <>
      <Box sx={{ my: 2 }}>
        <OutlinedInput
          value={bidAmount}
          onChange={(event) => setBidAmount(event.target.value)}
          label="Amount"
          fullWidth
          error={bidAmount !== '' && !validBid}
        />
      </Box>

      <Button
        variant="contained"
        onClick={() => {
          alert('TODO: Implement bidding')
        }}
        disabled={bidAmount === '' || !validBid}
      >
        Bid
      </Button>
    </>
  )
}
