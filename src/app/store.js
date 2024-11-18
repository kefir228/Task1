import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '../components/Counter/counterSlice'
import { authReducer } from '../components/Admin/adminSlice'
import { apiReducer } from '../components/Edit/editSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    api: apiReducer,
  },
})