import React from 'react'
import TableView from './features/table/TableView'
import { Container, Typography } from '@mui/material'

function App() {
  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ mt: 4 }}>
        Dynamic Data Table Manager
      </Typography>
      <TableView />
    </Container>
  )
}

export default App

