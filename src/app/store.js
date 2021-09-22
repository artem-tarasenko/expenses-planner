import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/lists/counterSlice'
import listsReducer from '../features/lists/listsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    lists: listsReducer
  },
})