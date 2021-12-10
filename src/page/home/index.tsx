import React from 'react'
import { Header } from '../../components/header'
import { Search } from '../../components/search'

export const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <Search />
    </div>
  )
}
