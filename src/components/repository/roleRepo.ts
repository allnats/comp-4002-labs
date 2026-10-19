import mockOrganizationData from "./mockOrganizationData";

export async function getAllRoles() {
  return mockOrganizationData;
}

export async function getRoleNames() {
  return mockOrganizationData.map((r) => r.role);
}

export async function createRole(
  role: string,
  firstName: string,
  lastName: string,
) {
  try {
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
