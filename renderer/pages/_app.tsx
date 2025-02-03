import React from 'react'
import { UIProvider, ScrollArea } from '@yamada-ui/react'
import Head from 'next/head'
import Menu from '../public/components/menu'
import Topbar from '../public/components/topbar'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    width: '100%',
  },
  menu: {
    width: "20rem",
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#f0f6fc',
    marginTop: '4rem',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    width: '100%',
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Head>
        <title>Electron-Sample</title>
      </Head>
      <div style={styles.container}>
        <div style={styles.menu}>
          <Menu />
        </div>
        <div style={styles.rightContainer}>
          <Topbar />
          <ScrollArea style={styles.content}>
            <Component {...pageProps} />
          </ScrollArea>
        </div>
        
      </div>
    </UIProvider>
  );
}

export default MyApp
