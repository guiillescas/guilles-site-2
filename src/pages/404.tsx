import { ReactElement, useLayoutEffect, useRef } from 'react'

import { useRouter } from 'next/router'
import Image from 'next/image'

import { AppLayout } from 'layouts/AppLayout'

import SEO from 'components/SEO'
import { Button } from 'components/Button'

import { renderCanvasStars } from 'utils/canvas'

import * as Styles from 'styles/Pages/NotFound'

export default function NotFound(): ReactElement {
  const router = useRouter()

  const canvasRef = useRef<HTMLCanvasElement>(null)

  function handleClickBackHomeButton() {
    router.push('/')
  }

  useLayoutEffect(() => {
    renderCanvasStars(canvasRef.current)
  }, [])

  return (
    <AppLayout>
      <Styles.Container>
        <SEO title="Oops..." />

        <canvas ref={canvasRef}></canvas>

        <Styles.Content>
          <div className="message-wrapper">
            <p>404</p>

            <div className="border" />

            <div className="texts">
              <h2>Page not found</h2>
              <p>Are you lost?</p>
            </div>

            <Button onClick={handleClickBackHomeButton}>Back to home</Button>
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
    </AppLayout>
  )
}
