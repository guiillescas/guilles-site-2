import { ReactElement } from 'react'

import { format } from 'date-fns'

import * as Styles from './styles'

export function WorkExperience(): ReactElement {
  const today = new Date()

  return (
    <Styles.WorkExperienceContainer>
      <div className="line" />

      <div className="jobs">
        <div className="job">
          <div className="ball" />

          <h3>Job title</h3>
          <span>
            <time>{format(today, 'MM yyyy')}</time> -{' '}
            <time>{format(today, 'MM yyyy')}</time>
          </span>
          <p>This is a space to job description</p>
          <p>You can add multiple lines</p>
          <p>Like this</p>
        </div>
        <div className="job">
          <div className="ball" />
          <h3>Job title</h3>
          <span>
            <time>{format(today, 'MM yyyy')}</time> -{' '}
            <time>{format(today, 'MM yyyy')}</time>
          </span>
          <p>This is a space to job description</p>
          <p>You can add multiple lines</p>
          <p>Like this</p>
        </div>
      </div>
    </Styles.WorkExperienceContainer>
  )
}
