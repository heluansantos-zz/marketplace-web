import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import ContextProvider from '../context/GlobalContext'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
