import { useEffect, useState } from "react";
import employeeService from "../services/employeeService";
import type Department from "../../models/department";

function useEmployee() {
  const [employeeDepartment, setEmployeeDepartment] = useState<Department[]>(
    [],
  );

  useEffect(() => {
    async function loadDeparmentData() {
      const departmentData = employeeService.getAllDepartments();
      setEmployeeDepartment(departmentData);
    }

    loadDeparmentData();
  }, []);

  function getDepartmentNames() {
    return employeeService.getDepartmentNames();
  }

  return {
    employeeDepartment,
    setEmployeeDepartment,
    getDepartmentNames,
  };
}

export default useEmployee;
