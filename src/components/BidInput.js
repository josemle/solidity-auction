import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/TextField'
import React, { useState } from 'react'
import Web3 from 'web3'
import { etherToWei, getAuctionContract } from '../web3/utils'

export default function BidInput(props) {
  const [bidAmount, setBidAmount] = useState('')

  const { contractState, contractAddress, currentAccount } = props

  function isValidNumber(num) {
    return !isNaN(num)
  }

  function canBeWinningBid() {
    return (
      Number(bidAmount) + contractState.accountBid > contractState.highestBid
    )
  }

  // Create and send a transaction to an auction smart contract
  async function onBid(event) {
    const web3 = new Web3(window.ethereum)
    const amount = etherToWei(bidAmount)

    const contract = getAuctionContract(web3, contractAddress)

    const price=await web3.eth.getGasPrice()
    console.log(price)
    await contract.methods
      .placeBid()
      .send({
        value: amount,
        from: currentAccount,
        gas: 210000,
        gasPrice: price,
      })
      .once('transactionHash', function (hash) {
        console.log('Transaction hash received', hash)
      })
      .once('receipt', function (receipt) {
        console.log('Transaction receipt received', receipt)
      })
      .on('confirmation', function (confNumber, receipt) {
        console.log('Confirmation', confNumber)
      })
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
          // Send a bid when the button is clicked
          onBid()
        }}
        disabled={bidAmount === '' || !validBid}
      >
        Bid
      </Button>
    </>
  )
}
