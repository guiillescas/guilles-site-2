export interface PositionProps {
  title: string
  startedAt: string
  endedAt?: string
  description: string
}

export interface JobProps {
  company: string
  companyLogoUrl: string
  employmentType?: string
  title?: string
  description?: string
  startedAt: string
  endedAt?: string
  positions?: PositionProps[]
}
