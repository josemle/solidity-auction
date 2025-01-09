import HomeIcon from '@mui/icons-material/Home'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'

import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h6">Web3 Auction</Typography>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                variant="contained"
                size="medium"
                startIcon={<HomeIcon />}
                component={Link}
                to="/"
              >
                Home
              </Button>
            </ButtonGroup>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
