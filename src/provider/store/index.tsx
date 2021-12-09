import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { IThemeProviderProps } from './types'

export const ThemeProvider: React.FC<IThemeProviderProps> = ({
  children
}: IThemeProviderProps) => {
  return <Provider store={store}>{children}</Provider>
}
