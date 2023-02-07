import { useEffect, useRef } from 'react'

import Image from 'next/image'
import { format } from 'date-fns'

import { AppLayout } from 'layouts/AppLayout'

import SEO from 'components/SEO'

import { renderCanvasStars } from 'utils/canvas'

import * as Styles from 'styles/pages/home'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    renderCanvasStars(canvasRef.current)
  }, [])

  return (
    <AppLayout>
      <Styles.HomeContainer>
        <SEO title="Home" />

        <canvas ref={canvasRef}></canvas>
        <div className="canvas-background" />

        <section id="introduction">
          <h1>
            Hey, I'm <span>Guilherme Illescas</span> 👋
          </h1>
          <h1>I build stuff for the web.</h1>
          <p>
            I'm a Senior front-end developer, able to build exceptional web apps
            with high performance and excelent user experience.
          </p>
        </section>

        <section id="about">
          <div>
            <h1>About me</h1>

            <p>
              As a front-end developer, I have already developed multiple
              applications that impacted more than 1 million customers arround
              the world. Always focused on offering an excellent experience and
              high performance for the customer
            </p>

            <p>
              I'm passionate to make this world better with things that I do and
              with who I am. I love help people to increase themselves and boots
              them to get results.
            </p>
          </div>

          <div>
            <div className="ball one" />
            <div className="ball two" />
            <div className="ball three" />

            <Image
              src="/assets/me.jpeg"
              alt="Imagem de Guilherme Illescas"
              width={500}
              height={470}
            />
          </div>
        </section>

        <section id="jobs">
          <div className="beauty-ball" />
          <div className="line one" />
          <div className="line two" />

          <h1>My journey</h1>

          <div>
            <nav>
              <button type="button">
                Escola Conquer
                <span>
                  <time>{format(new Date('09-01-2021'), 'MMM yyyy')}</time> -
                  Present
                </span>
              </button>
              <button type="button">
                Amank
                <span>
                  <time>{format(new Date('08-01-2022'), 'MMM yyyy')}</time> -
                  Present
                </span>
              </button>
              <button type="button">
                DoBank
                <span>
                  <time>{format(new Date('06-01-2022'), 'MMM yyyy')}</time> -{' '}
                  <time>{format(new Date('09-01-2022'), 'MMM yyyy')}</time>
                </span>
              </button>
              <button type="button">Chamer</button>
              <button type="button">WebCorp</button>
              <button type="button">WebTrip</button>
            </nav>

            <div className="job-content"></div>
          </div>
        </section>
      </Styles.HomeContainer>
    </AppLayout>
  )
}
