import { useState } from "react";
import API from "../services/api";

function AttendanceList({ employees }) {

  const [records, setRecords] = useState([]);

  const fetchAttendance = async (employeeId) => {

    if (!employeeId) return;

    const res = await API.get(`/attendance/${employeeId}`);
    setRecords(res.data);
  };

  return (
    <div>

      <h3>View Attendance</h3>
        {records.length === 0 && <p>No attendance records</p>}
      <select onChange={(e) => fetchAttendance(e.target.value)}>
        <option>Select Employee</option>

        {employees.map((emp) => (
          <option key={emp.id} value={emp.id}>
            {emp.full_name}
          </option>
        ))}
      </select>

      <table border="1" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {records.map((rec) => (
            <tr key={rec.id}>
              <td>{rec.date}</td>
              <td>{rec.status}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default AttendanceList;