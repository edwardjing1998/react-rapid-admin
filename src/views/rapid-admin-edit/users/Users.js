import React from 'react'
import { CTable, CTableBody, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell } from '@coreui/react'

const Users = () => {
  const users = [
    { id: 1, name: 'Alice Johnson', status: 'Active', operator: 'OP123' },
    { id: 2, name: 'Bob Smith', status: 'Inactive', operator: 'OP456' },
    { id: 3, name: 'Charlie Lee', status: 'Active', operator: 'OP789' },
    { id: 4, name: 'Diana Ross', status: 'Active', operator: 'OP321' },
    { id: 5, name: 'Evan Wright', status: 'Inactive', operator: 'OP654' },
    { id: 6, name: 'Fiona Carter', status: 'Pending', operator: 'OP987' },
    { id: 7, name: 'George King', status: 'Active', operator: 'OP111' },
    { id: 8, name: 'Hannah Stone', status: 'Inactive', operator: 'OP222' },
    { id: 9, name: 'Ian Brooks', status: 'Active', operator: 'OP333' },
    { id: 10, name: 'Julia Park', status: 'Pending', operator: 'OP444' },
  ]

  return (
    <CTable striped hover responsive>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>User ID</CTableHeaderCell>
          <CTableHeaderCell>User Name</CTableHeaderCell>
          <CTableHeaderCell>Status</CTableHeaderCell>
          <CTableHeaderCell>Operator Code</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {users.map((user) => (
          <CTableRow key={user.id}>
            <CTableDataCell>{user.id}</CTableDataCell>
            <CTableDataCell>{user.name}</CTableDataCell>
            <CTableDataCell>{user.status}</CTableDataCell>
            <CTableDataCell>{user.operator}</CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  )
}

export default Users
