import { useRouter } from 'next/router'

import { ThemeProvider } from 'styled-components'

import { fireEvent, render, screen } from '@testing-library/react'

import { primary } from 'styles/themes/primary'

import { Header } from '.'

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn()
}))

describe('Header component', () => {
  // it('should render correctly', () => {
  //   render(
  //     <ThemeProvider theme={primary}>
  //       <Header />
  //     </ThemeProvider>
  //   )

  //   expect(screen.findByText('Home')).toBeInTheDocument()
  // })

  it('should change router when hits the anchor', () => {
    // const mockRouter = {
    //   push: jest.fn() // the component uses `router.push` only
    // }

    jest.mock('next/link', () => jest.fn())

    render(
      <ThemeProvider theme={primary}>
        <Header />
      </ThemeProvider>
    )

    const blogAnchor = screen.getByText('Blog')

    console.log(blogAnchor.closest('link'))

    // fireEvent.click(blogAnchor)

    expect(blogAnchor.closest('link')).toHaveAttribute('href', '/blog')
  })
})
