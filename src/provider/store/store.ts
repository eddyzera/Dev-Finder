import { configureStore } from '@reduxjs/toolkit'
import devReducer from './slice/devSlice'

export default configureStore({
  reducer: {
    developer: devReducer
  }
})
