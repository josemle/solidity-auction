import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/TextField'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Auction() {
  const navigate = useNavigate()
  const [address, setAddress] = useState('')

  return (
    <>
      <Box sx={{ my: 2 }}>
        <OutlinedInput
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          label="Address"
          fullWidth
        />
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          navigate(`/auctions/${address}`)
        }}
      >
        Go To Contract
      </Button>
    </>
  )
}
