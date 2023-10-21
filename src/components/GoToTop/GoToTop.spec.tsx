import { ThemeProvider } from 'styled-components'

import { render, screen } from '@testing-library/react'

import { primary } from 'styles/themes/primary'

import { GoToTop } from './index'

describe('GoToTop component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={primary}>
        <GoToTop />
      </ThemeProvider>
    )

    expect(screen.getByTestId('go-to-top-component'))
  })

  it('should go to top of the page', () => {
    const {} = render(
      <ThemeProvider theme={primary}>
        <GoToTop />
      </ThemeProvider>
    )

    global.scrollTo = jest.fn()

    expect(screen.getByTestId('go-to-top-component'))
  })
})
