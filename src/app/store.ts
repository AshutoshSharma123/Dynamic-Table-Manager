import { configureStore } from '@reduxjs/toolkit'
import tableReducer from '../features/table/tableSlice'

export const store = configureStore({
  reducer: {
    table: tableReducer,
  },
})

// ✅ Type exports (for useSelector, useDispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
