import { ReactNode } from 'react'

export interface IThemeProviderProps {
  children: ReactNode
}

export interface IDeveloper {
  data: {
    name: string
  }
}

export interface IRootState {
  developer: IDeveloper
}
