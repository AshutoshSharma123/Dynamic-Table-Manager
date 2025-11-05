import { createSlice,type PayloadAction } from '@reduxjs/toolkit'

interface Column {
  id: string
  label: string
  visible: boolean
}

interface Row {
  id: string
  name: string
  email: string
  age: number
  role: string
}

interface TableState {
  columns: Column[]
  rows: Row[]
  sortColumn: string | null
  sortDirection: 'asc' | 'desc'
}

const initialState: TableState = {
  columns: [
    { id: 'name', label: 'Name', visible: true },
    { id: 'email', label: 'Email', visible: true },
    { id: 'age', label: 'Age', visible: true },
    { id: 'role', label: 'Role', visible: true },
  ],
  rows: [
    { id: '1', name: 'Ashutosh', email: 'ashu@example.com', age: 24, role: 'Engineer' },
    { id: '2', name: 'Rahul', email: 'rahul@example.com', age: 27, role: 'Manager' },
  ],
  sortColumn: null,
  sortDirection: 'asc',
}

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    sortTable: (state, action: PayloadAction<string>) => {
      const column = action.payload
      if (state.sortColumn === column) {
        // Toggle sort direction
        state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc'
      } else {
        state.sortColumn = column
        state.sortDirection = 'asc'
      }

      state.rows.sort((a: any, b: any) => {
        const aValue = a[column]
        const bValue = b[column]

        if (aValue < bValue) return state.sortDirection === 'asc' ? -1 : 1
        if (aValue > bValue) return state.sortDirection === 'asc' ? 1 : -1
        return 0
      })
    },
  },
})

export const { sortTable } = tableSlice.actions
export default tableSlice.reducer
