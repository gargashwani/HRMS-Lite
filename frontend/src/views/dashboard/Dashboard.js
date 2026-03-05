import React, { useEffect, useState } from 'react'
import API from '../../services/api'

import { CCard, CCardBody, CCardHeader, CRow, CCol } from '@coreui/react'

const Dashboard = () => {
  const [employees, setEmployees] = useState([])
  const [attendanceToday, setAttendanceToday] = useState([])
  const [presentToday, setPresentToday] = useState(0)
  const [absentToday, setAbsentToday] = useState(0)

  const today = new Date().toISOString().split('T')[0]

  const fetchData = React.useCallback(async () => {
    try {
      const empRes = await API.get('/employees')
      setEmployees(empRes.data)

      let allAttendance = []

      for (let emp of empRes.data) {
        const res = await API.get(`/attendance/${emp.id}`)
        allAttendance = [...allAttendance, ...res.data]
      }

      const todayRecords = allAttendance.filter((a) => a.date === today)

      setAttendanceToday(todayRecords)

      setPresentToday(todayRecords.filter((a) => a.status === 'Present').length)

      setAbsentToday(todayRecords.filter((a) => a.status === 'Absent').length)
    } catch (error) {
      console.error('Dashboard error', error)
    }
  }, [today])

  useEffect(() => {
    // eslint-disable-next-line
    fetchData()
  }, [fetchData])

  return (
    <div>
      <CRow>
        <CCol sm={3}>
          <CCard>
            <CCardHeader>Total Employees</CCardHeader>
            <CCardBody>
              <h3>{employees.length}</h3>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol sm={3}>
          <CCard>
            <CCardHeader>Attendance Today</CCardHeader>
            <CCardBody>
              <h3>{attendanceToday.length}</h3>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol sm={3}>
          <CCard>
            <CCardHeader>Present Today</CCardHeader>
            <CCardBody>
              <h3>{presentToday}</h3>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol sm={3}>
          <CCard>
            <CCardHeader>Absent Today</CCardHeader>
            <CCardBody>
              <h3>{absentToday}</h3>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Dashboard
