import mockOrganizationData from "./mockOrganizationData";
import type Role from "../../models/role";

export async function getAllRoles() {
  return mockOrganizationData;
}

export async function getRoleNames() {
  return mockOrganizationData.map((r) => r.role);
}

export async function createRole(newRole: Role) {
  try {
    const { role, firstName, lastName } = newRole;
    const allRoles = await getAllRoles();

    allRoles.push({ role, firstName, lastName });
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    } else {
      throw new Error("RepositoryError: Failed to create role.", {
        cause: err,
      });
    }
  }
}
