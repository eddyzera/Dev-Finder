import React from 'react'
import { useSelector } from 'react-redux'
import { selectDev } from './provider/store/selector/developerSelector'
export const App: React.FC = () => {
  const dev = useSelector(selectDev)
  return (
    <div>
      <h1>Ola Mundo: {dev.name}</h1>
    </div>
  )
}
