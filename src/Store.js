import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { carApi } from './services/api'

export const store = configureStore({
  reducer: {
    [carApi.reducerPath]: carApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApi.middleware),
})
setupListeners(store.dispatch)