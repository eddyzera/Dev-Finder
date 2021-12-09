import React from 'react'
import { render } from '@testing-library/react'
import { Header } from '.'
import '@testing-library/jest-dom'

describe('Header', () => {
  it('should render component Header', () => {
    const { container } = render(<Header />)
    expect(container.querySelector('.header')).toBeInTheDocument()
  })
})
