import { render, screen } from '@testing-library/react'

import { Button } from './index'

describe('Button component', () => {
  it('should render correctly', () => {
    render(<Button>Hello</Button>)

    expect(screen.getByText('Hello'))
  })
})
