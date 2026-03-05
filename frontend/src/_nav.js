import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilUser, cilCalendar } from '@coreui/icons'

import {
  CNavItem
} from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: ' Dashboard ',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} />,
  },
  {
    component: CNavItem,
    name: ' Employees ',
    to: '/employees',
    icon: <CIcon icon={cilUser} />,
  },
  {
    component: CNavItem,
    name: ' Attendance',
    to: '/attendance',
    icon: <CIcon icon={cilCalendar} />,
  }
]

export default _nav