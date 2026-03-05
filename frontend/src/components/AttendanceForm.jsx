import { useState } from "react";
import API from "../services/api";

function AttendanceForm({ employees }) {

  const [form, setForm] = useState({
    employee_id: "",
    date: "",
    status: "Present",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitAttendance = async (e) => {
    e.preventDefault();
    await API.post("/attendance", form);
    alert("Attendance marked");
  };

  return (
    <form onSubmit={submitAttendance}>
      <h3>Mark Attendance</h3>

      <select name="employee_id" onChange={handleChange}>
        <option>Select Employee</option>

        {employees.map((emp) => (
          <option key={emp.id} value={emp.id}>
            {emp.full_name}
          </option>
        ))}
      </select>

      <input type="date" name="date" onChange={handleChange}/>

      <select name="status" onChange={handleChange}>
        <option>Present</option>
        <option>Absent</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AttendanceForm;