import { createSlice } from '@reduxjs/toolkit'

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
}

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {},
})

export default tableSlice.reducer
