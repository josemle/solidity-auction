import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import Header from './components/Header'
import Home from './components/Home'
import Auction from './components/Auction'
import NotFound from './components/NotFound'
import Layout from './components/Layout'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import RequireWallet from './components/RequireWallet'

// Configure CSS
const cache = createCache({
  key: 'css',
  prepend: true
})

const theme = createTheme({
  palette: {
    background: {
      default: '#FAFAFA'
    }
  }
})

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CacheProvider value={cache}>
          <div className="App">
            <CssBaseline />
            <Header />
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auctions/:address" element={
                  <RequireWallet>
                    <Auction />
                  </RequireWallet>
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </div>
        </CacheProvider>
      </ThemeProvider>
    </Router>
  )
}
