import { AppLayout } from 'layouts/AppLayout'

import { Logo } from 'components/Logo'

import * as Styles from 'styles/pages/loading'

function Loading() {
  return (
    <AppLayout>
      <Styles.LoadingContainer>
        <Logo animate width={80} height={80} fontSizeRem={4} />
      </Styles.LoadingContainer>
    </AppLayout>
  )
}

export default Loading
