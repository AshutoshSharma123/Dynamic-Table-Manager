
import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

const TableView = () => {
  const { columns, rows } = useSelector((state: RootState) => state.table)
  const visibleColumns = columns.filter(col => col.visible)

  return (
    <TableContainer component={Paper} sx={{ mt: 4, p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            {visibleColumns.map(col => (
              <TableCell key={col.id}>{col.label}</TableCell>
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
