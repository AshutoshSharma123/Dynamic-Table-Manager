
import { useSelector, useDispatch } from 'react-redux'
import {type RootState } from '../../app/store'
import { sortTable } from './tableSlice'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel } from '@mui/material'

const TableView = () => {
  const dispatch = useDispatch()
  const { columns, rows, sortColumn, sortDirection } = useSelector((state: RootState) => state.table)

  const visibleColumns = columns.filter(col => col.visible)

  const handleSort = (colId: string) => {
    dispatch(sortTable(colId))
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 4, p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            {visibleColumns.map(col => (
              <TableCell key={col.id}>
                <TableSortLabel
                  active={sortColumn === col.id}
                  direction={sortColumn === col.id ? sortDirection : 'asc'}
                  onClick={() => handleSort(col.id)}
                >
                  {col.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              {visibleColumns.map(col => (
                <TableCell key={col.id}>{(row as any)[col.id]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableView
