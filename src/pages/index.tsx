import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { JobProps } from 'interfaces/pages/home'
import { motion } from 'framer-motion'
import { format, formatDistance } from 'date-fns'

import { AppLayout } from 'layouts/AppLayout'

import SEO from 'components/SEO'
import { ProjectProps } from 'components/ProjectCard/types'
import { ProjectCard } from 'components/ProjectCard'

import { renderCanvasStars } from 'utils/canvas'

import * as Styles from 'styles/pages/home'
import { primary } from 'styles/fonts'

import portfolios from 'data/portfolios.json'
import jobsFromStorage from 'data/jobs.json'

export default function Home() {
  const jobs: JobProps[] = jobsFromStorage
  const projects: ProjectProps[] = portfolios

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [selectedJob, setSelectedJob] = useState<JobProps>(jobs[0])

  function handleSetSelectedJob(jobCompany: string) {
    const formattedJob = jobs.find(job => job.company === jobCompany)

    if (formattedJob) {
      setSelectedJob(formattedJob)
    }
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

        {/* <canvas ref={canvasRef}></canvas>
        <div className="canvas-background" /> */}

        <section id="introduction">
          <div className="vector" />

          <div className="content">
            <h1 className={primary.className}>
              Hey, I'm <span>Guilherme Illescas</span> 👋
            </h1>
            <h2 className={primary.className}>I build stuff for the web.</h2>
            <p>
              I'm a Senior front-end developer, able to build exceptional web
              apps with high performance and excelent user experience.
            </p>

            <div className="social-wrapper">
              <Link
                title="Github"
                target="_blank"
                href="https://github.com/guiillescas"
              >
                <FiGithub size={24} />
              </Link>
              <Link
                title="Linkedin"
                target="_blank"
                href="https://www.linkedin.com/in/guilherme-illescas/"
              >
                <FiLinkedin size={24} />
              </Link>
              <Link
                title="Instagram"
                target="_blank"
                href="https://www.instagram.com/gui.illescas/"
              >
                <FiInstagram size={24} />
              </Link>
            </div>
          </div>

          <div className="image-wrapper">
            <Image
              src="/assets/okay_memoji.png"
              alt="Foto de Guilherme Illescas"
              width={300}
              height={300}
            />
          </div>
        </section>

        <section id="projects">
          <h1 className="custom-title">
            Portf
            <div>
              <div className="hole" />
            </div>
            lio
          </h1>

          <div className="projects-wrapper">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isInverted={index % 2 === 1}
              />
            ))}
          </div>
        </section>

        <section id="experience">
          <div className="beauty-ball" />
          <div className="line one" />
          <div className="line two" />

          <h1 className="custom-title">
            My j
            <div>
              <div className="hole" />
            </div>
            urney
          </h1>

          <div>
            <div className="menu-wrapper">
              <nav>
                {jobs.map(job => (
                  <button
                    type="button"
                    key={job.company}
                    onClick={() => handleSetSelectedJob(job.company)}
                    disabled={selectedJob === job}
                  >
                    {job.company}
                    <span>
                      <time>{format(new Date(job.startedAt), 'MMM yyyy')}</time>{' '}
                      -{' '}
                      {job.endedAt ? (
                        <time>{format(new Date(job.endedAt), 'MMM yyyy')}</time>
                      ) : (
                        'Present'
                      )}
                    </span>
                  </button>
                ))}
              </nav>

              <div className="icon-wrapper">
                <Link
                  href="https://www.linkedin.com/in/guilherme-illescas/"
                  target="_blank"
                  title="See on linkedin"
                >
                  <FiLinkedin size={24} />
                </Link>
              </div>
            </div>

            <div className="condensed-menu-wrapper">
              <label htmlFor="experience">Selecione uma empresa</label>
              <select
                name="experience"
                id="experience"
                onChange={event => handleSetSelectedJob(event.target.value)}
              >
                {jobs.map(job => (
                  <option value={job.company} key={job.company}>
                    {job.company}
                  </option>
                ))}
              </select>
            </div>

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
                        : formatDistance(
                            new Date(selectedJob.startedAt),
                            new Date()
                          )}
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
          <h1 className="custom-title">
            Ab
            <div>
              <div className="hole" />
            </div>
            ut me
          </h1>

          <div>
            <div>
              <p>
                As a front-end developer, I have already developed multiple
                applications that impacted more than 1 million customers arround
                the world. Always focused on offering an excellent experience
                and high performance for the customer
              </p>

              <p>
                I'm passionate to make this world better with things that I do
                and with who I am. I love helping people to increase themselves
                and boost them to get results.
              </p>
            </div>

            <div>
              <div className="ball one" />
              <div className="ball two" />
              <div className="ball three" />

              <Image
                src="/assets/me.jpg"
                alt="Imagem de Guilherme Illescas"
                width={500}
                height={470}
              />
            </div>
          </div>
        </section>
      </Styles.HomeContainer>
    </AppLayout>
  )
}
