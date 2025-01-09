import Paper from '@mui/material/Paper'
import Alert from '@mui/material/Alert'
import React from 'react'

export default function NotFound() {
  return (
    <Paper sx={{ p: 2, margin: 'auto', flexGrow: 1 }}>
      <Alert severity="error">Page not found</Alert>
    </Paper>
  )
}
