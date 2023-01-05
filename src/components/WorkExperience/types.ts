export interface JobProps {
  id: string
  title: string
  startedAt: Date
  endedAt?: Date
  description: string
}

export interface WorkExperienceProps {
  jobs: JobProps[]
}
