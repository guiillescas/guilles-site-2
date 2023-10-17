import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import Modal from 'react-modal'
import { AnimateSharedLayout } from 'framer-motion'

import { ThemeProvider } from 'styled-components'

import { theme } from 'styles/themes/theme'
import * as Styles from 'styles/pages/app'
import { GlobalStyles } from 'styles/global'
import { primary } from 'styles/fonts'

import Loading from './loading'

Modal.setAppElement('#__next')

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setIsLoading(true) : setIsLoading(false)
    }

    const handleComplete = () => {
      setIsLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router])

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Dev Gui Illescas</title>
      </Head>
      <GlobalStyles />

      <AnimateSharedLayout>
        <Styles.AppContainer className={primary.className}>
          {isLoading ? <Loading /> : <Component {...pageProps} />}
        </Styles.AppContainer>
      </AnimateSharedLayout>
    </ThemeProvider>
  )
}

export default MyApp
