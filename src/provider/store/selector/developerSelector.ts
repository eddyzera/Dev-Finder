import { createSelector } from '@reduxjs/toolkit'
import { IRootState } from '../types'

const developerSelectSlice = (state: IRootState) => state.developer

export const selectDev = createSelector(
  [developerSelectSlice],
  (state) => state.data
)
