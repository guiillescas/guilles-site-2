import { ReactElement } from 'react'

import { motion } from 'framer-motion'

import { Header } from 'components/Header'

import { AppLayoutProps } from './types'

import * as Styles from './styles'

export function AppLayout(props: AppLayoutProps): ReactElement {
  return (
    <Styles.AppLayoutContainer>
      <div className="content">
        <Header />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3
          }}
        >
          {props.children}
        </motion.div>
      </div>
    </Styles.AppLayoutContainer>
  )
}
