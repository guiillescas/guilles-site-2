import { ReactElement } from 'react'

import { Header } from 'components/Header'

import { AppLayoutProps } from './types'

import * as Styles from './styles'

export function AppLayout(props: AppLayoutProps): ReactElement {
  return (
    <Styles.AppLayoutContainer>
      <div className="content">
        <Header />

        {props.children}
      </div>
    </Styles.AppLayoutContainer>
  )
}
