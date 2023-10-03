import '@/src//styles/globals.css'
import { CacheProvider, EmotionCache } from '@emotion/react'
import type { AppProps } from 'next/app'
import createEmotionCache from '../helpers/CreateEmotionCache'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../helpers/Theme'
import { CssBaseline } from '@mui/material'

const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
          <CssBaseline /> 
          <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}