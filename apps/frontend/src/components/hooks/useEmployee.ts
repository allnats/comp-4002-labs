import { useEffect, useState } from "react";
import employeeService from "../services/employeeService";
import type Department from "../../models/department";
import Employee from "../../models/employee";

function useEmployee() {
  const [employeeDepartment, setEmployeeDepartment] = useState<Department[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState({
    status: false,
    message: "",
  });

  useEffect(() => {
    async function loadDeparmentData() {
      try {
        setIsLoading(true);
        const departmentData = await employeeService.getAllDepartments();
        setEmployeeDepartment(departmentData);
        setHasError({ status: false, message: "" });
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
          setHasError({ status: true, message: err.message });
        } else {
          console.error(err);
          setHasError({
            status: true,
            message: "Unknown Error: Error fetching department",
          });
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadDeparmentData();
  }, []);

  function getDepartmentNames() {
    return employeeService.getDepartmentNames();
  }

  function getAllEmployees() {
    let allEmployees: Employee[] = [];
    for (const department of employeeDepartment) {
      allEmployees = [...allEmployees, ...department.employees];
    }

    return allEmployees;
  }

  return {
    employeeDepartment,
    isLoading,
    hasError,
    setEmployeeDepartment,
    getDepartmentNames,
    getAllEmployees,
  };
}

export default useEmployee;
