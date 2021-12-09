import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Search } from '.'

describe('Search', () => {
  it('should render component Search', () => {
    const { container } = render(<Search />)
    expect(container.querySelector('.search')).toBeInTheDocument()
  })
})
