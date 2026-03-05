import { useEffect, useState } from "react";
import API from "./services/api";

import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";

function App() {

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>

      <h1>HRMS Lite</h1>

      <EmployeeForm refreshEmployees={fetchEmployees} />

      <EmployeeList
        employees={employees}
        refreshEmployees={fetchEmployees}
      />

      <hr />

      <AttendanceForm employees={employees} />
        <AttendanceList employees={employees} />
    </div>
  );
}

export default App;