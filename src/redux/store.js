import { configureStore } from '@reduxjs/toolkit'

import foodSlice from './foodSlice'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    food :foodSlice,
    user:userSlice
  },
})