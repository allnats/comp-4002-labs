import type Role from "../../models/role";
import * as roleService from "../services/roleService";
import { useState, useEffect } from "react";

function useOrganization() {
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    async function fetchRoles() {
      const allRoles = await roleService.getAllRoles();
      setRoles(allRoles);
    }

    fetchRoles();
  }, []);

  function createNewRole(newRole: Role) {
    setRoles((roles) => [...roles, newRole]);
  }

  return { roles, createNewRole };
}

export default useOrganization;
