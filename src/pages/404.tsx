import Image from 'next/image'
import { ReactElement } from 'react'

import SEO from '../components/SEO'

import * as Styles from 'styles/Pages/NotFound'

export default function NotFound(): ReactElement {
  return (
    <Styles.Container>
      <SEO title="Oops..." />

      <Styles.Content>
        <div className="message-wrapper">
          <p>404</p>

          <div className="border" />

          <div className="texts">
            <h2>Page not found</h2>
            <p>Are you lost?</p>
          </div>
        </div>

        <div className="gif-wrapper">
          <Image
            src="https://c.tenor.com/qY74aL5yWb0AAAAC/where-the-hell-am-i-where-am-i.gif"
            alt="a"
            width={480}
            height={270}
          />
        </div>
      </Styles.Content>
    </Styles.Container>
  )
}
