import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import { JobProps } from 'interfaces/pages/home'
import { motion } from 'framer-motion'
import { format, formatDistance } from 'date-fns'

import { AppLayout } from 'layouts/AppLayout'

import SEO from 'components/SEO'

import { renderCanvasStars } from 'utils/canvas'

import * as Styles from 'styles/pages/home'
import { primary } from 'styles/fonts'

import jobsFromStorage from 'data/jobs.json'

export default function Home() {
  const jobs: JobProps[] = jobsFromStorage

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [selectedJob, setSelectedJob] = useState<JobProps>(jobs[0])

  function handleSetSelectedJob(job: JobProps) {
    setSelectedJob(job)
  }

  useEffect(() => {
    renderCanvasStars(canvasRef.current)
  }, [])

  const variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.3
      }
    },
    hide: {
      y: -20,
      opacity: 0
    }
  }

  return (
    <AppLayout>
      <Styles.HomeContainer>
        <SEO title="Home" />

        <canvas ref={canvasRef}></canvas>
        <div className="canvas-background" />

        <section id="introduction">
          <div className="content">
            <h1 className={primary.className}>
              Hey, I'm <span>Guilherme Illescas</span> 👋
            </h1>
            <h1 className={primary.className}>I build stuff for the web.</h1>
            <p>
              I'm a Senior front-end developer, able to build exceptional web
              apps with high performance and excelent user experience.
            </p>
          </div>
        </section>

        <section id="projects">
          <h1>My projects</h1>
          <p>
            Here you can see and test in hands, projects that I worked directly
          </p>
        </section>

        <section id="jobs">
          <div className="beauty-ball" />
          <div className="line one" />
          <div className="line two" />

          <h1>My journey</h1>
          <p>
            See my complete professional journey. You can also, see my{' '}
            <a
              href="https://www.linkedin.com/in/guilherme-illescas/"
              target="_blank"
            >
              Linkedin here
            </a>
          </p>

          <div>
            <nav>
              {jobs.map(job => (
                <button
                  type="button"
                  key={job.company}
                  onClick={() => handleSetSelectedJob(job)}
                  disabled={selectedJob === job}
                >
                  {job.company}
                  <span>
                    <time>{format(new Date(job.startedAt), 'MMM yyyy')}</time> -{' '}
                    {job.endedAt ? (
                      <time>{format(new Date(job.endedAt), 'MMM yyyy')}</time>
                    ) : (
                      'Present'
                    )}
                  </span>
                </button>
              ))}
            </nav>

            <div className="job-content">
              <motion.div
                key={selectedJob.company}
                variants={variants}
                animate="show"
                initial="hide"
              >
                <div className="company-header-wrapper">
                  <Image
                    src={selectedJob.companyLogoUrl}
                    alt={`${selectedJob.company}'s logo`}
                    width={40}
                    height={40}
                  />

                  <div>
                    <h3>{selectedJob.company}</h3>
                    <p>
                      {selectedJob.employmentType} |{' '}
                      {selectedJob.endedAt
                        ? formatDistance(
                            new Date(selectedJob.endedAt),
                            new Date(selectedJob.startedAt)
                          )
                        : format(new Date(selectedJob.startedAt), 'LLL uu')}
                    </p>
                  </div>
                </div>

                {!selectedJob.positions && (
                  <div className="job-without-positions-info-wrapper">
                    <h4>{selectedJob.title}</h4>

                    <span>
                      {format(new Date(selectedJob.startedAt), 'LLL uu')}
                      {' - '}
                      {selectedJob.endedAt
                        ? format(new Date(selectedJob.endedAt), 'LLL uu')
                        : 'present'}
                      {' - '}
                      {formatDistance(
                        new Date(selectedJob.endedAt || new Date()),
                        new Date(selectedJob.startedAt)
                      )}
                    </span>
                  </div>
                )}

                {selectedJob.description && (
                  <div
                    className="job-description"
                    dangerouslySetInnerHTML={{
                      __html: selectedJob.description
                    }}
                  />
                )}

                {selectedJob.positions && (
                  <div className="job-positions-wrapper">
                    {selectedJob.positions.map(position => (
                      <div>
                        <div className="timeline-wrapper"></div>

                        <h4>{position.title}</h4>

                        <span>
                          {format(new Date(position.startedAt), 'LLL uu')}
                          {' - '}
                          {position.endedAt
                            ? format(new Date(position.endedAt), 'LLL uu')
                            : 'present'}
                          {' - '}
                          {formatDistance(
                            new Date(position.endedAt || new Date()),
                            new Date(position.startedAt)
                          )}
                        </span>

                        <div
                          className="job-position-content"
                          dangerouslySetInnerHTML={{
                            __html: position.description
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
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
              with who I am. I love helping people to increase themselves and
              boost them to get results.
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
      </Styles.HomeContainer>
    </AppLayout>
  )
}
