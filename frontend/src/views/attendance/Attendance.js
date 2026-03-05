import React, { useEffect, useState } from 'react'
import API from '../../services/api'

import { CButton, CCard, CCardBody, CCardHeader, CFormSelect } from '@coreui/react'

const Attendance = () => {
  const [employees, setEmployees] = useState([])
  const [employeeId, setEmployeeId] = useState('')
  const [date, setDate] = useState('')
  const [status, setStatus] = useState('Present')
  const [submitting, setSubmitting] = useState(false)

  const fetchEmployees = async () => {
    const res = await API.get('/employees')
    setEmployees(res.data)
  }

  useEffect(() => {
    // eslint-disable-next-line
    fetchEmployees()
  }, [])

  const submitAttendance = async () => {
    try {
      setSubmitting(true)
      await API.post('/attendance', {
        employee_id: employeeId,
        date,
        status,
      })

      alert('Attendance marked')
    } catch (error) {
      const message = error?.response?.data?.detail || 'Failed to mark attendance'
      alert(message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <CCard>
      <CCardHeader>Mark Attendance</CCardHeader>

      <CCardBody>
        <CFormSelect onChange={(e) => setEmployeeId(e.target.value)}>
          <option>Select Employee</option>

          {employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.full_name}
            </option>
          ))}
        </CFormSelect>

        <br />

        <input type="date" onChange={(e) => setDate(e.target.value)} />

        <br />
        <br />

        <CFormSelect onChange={(e) => setStatus(e.target.value)}>
          <option>Present</option>
          <option>Absent</option>
        </CFormSelect>

        <br />

        <CButton color="primary" onClick={submitAttendance} disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </CButton>
      </CCardBody>
    </CCard>
  )
}

export default Attendance
