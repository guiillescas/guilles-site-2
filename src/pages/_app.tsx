import Modal from 'react-modal'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'

import { ThemeProvider } from 'styled-components'

import { theme } from 'styles/themes/theme'
import { GlobalStyles } from 'styles/global'

Modal.setAppElement('#__next')

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500']
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Amank</title>
      </Head>
      <GlobalStyles />

      <Component className={roboto.className} {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
