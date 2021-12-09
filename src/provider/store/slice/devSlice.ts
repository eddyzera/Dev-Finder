import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDeveloper } from '../types'

const initialState: IDeveloper = {
  data: {
    name: 'Carlos'
  }
}

export const devSlice = createSlice({
  name: 'developer',
  initialState,
  reducers: {
    changeDeveloper(state, action: PayloadAction<IDeveloper>) {
      state.data.name = action.payload.data.name
    }
  }
})

export const { actions: devAction } = devSlice

export default devSlice.reducer
