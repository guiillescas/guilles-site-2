import { ThemeProvider } from 'styled-components'

import { render, screen } from '@testing-library/react'

import { primary } from 'styles/themes/primary'

import { Button } from './index'

describe('Button component', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider theme={primary}>
        <Button>Hello</Button>
      </ThemeProvider>
    )

    expect(screen.getByText('Hello'))
  })
})
