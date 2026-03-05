import React, { useEffect, useState } from "react"
import API from "../../services/api"

import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell
} from "@coreui/react"

const Employees = () => {

  const [employees, setEmployees] = useState([])

  const fetchEmployees = async () => {
    const res = await API.get("/employees")
    setEmployees(res.data)
  }

  const deleteEmployee = async (id) => {
    await API.delete(`/employees/${id}`)
    fetchEmployees()
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  return (
    <CCard>

      <CCardHeader>
        Employees
      </CCardHeader>

      <CCardBody>

        <CTable>

          <CTableHead>

            <CTableRow>
              <CTableHeaderCell>ID</CTableHeaderCell>
              <CTableHeaderCell>Name</CTableHeaderCell>
              <CTableHeaderCell>Email</CTableHeaderCell>
              <CTableHeaderCell>Department</CTableHeaderCell>
              <CTableHeaderCell>Action</CTableHeaderCell>
            </CTableRow>

          </CTableHead>

          <CTableBody>

            {employees.map(emp => (

              <CTableRow key={emp.id}>
                <CTableDataCell>{emp.employee_id}</CTableDataCell>
                <CTableDataCell>{emp.full_name}</CTableDataCell>
                <CTableDataCell>{emp.email}</CTableDataCell>
                <CTableDataCell>{emp.department}</CTableDataCell>

                <CTableDataCell>
                  <CButton
                    color="danger"
                    onClick={() => deleteEmployee(emp.id)}
                  >
                    Delete
                  </CButton>
                </CTableDataCell>

              </CTableRow>

            ))}

          </CTableBody>

        </CTable>

      </CCardBody>

    </CCard>
  )
}

export default Employees