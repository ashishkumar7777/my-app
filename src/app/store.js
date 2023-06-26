import { configureStore } from '@reduxjs/toolkit';
import showDataReducers from '../feature/showSlice'

export const store = configureStore({
  reducer : {
    show : showDataReducers
  }
})
