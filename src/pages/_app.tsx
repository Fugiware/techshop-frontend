import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from 'components/layout'
import { NotifyProvider } from 'contexts/notify'

import customTheme from 'styles/customTheme'
import 'styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const canUseLayout = !['Login', 'Signup'].includes(Component.displayName || '')

  return (
    <ChakraProvider theme={customTheme}>
      <NotifyProvider>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
        {canUseLayout ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </NotifyProvider>
    </ChakraProvider>
  )
}

export default MyApp
