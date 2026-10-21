import * as roleRepo from "../repository/roleRepo";
import type Role from "../../models/role";

export async function validateRepo(role: string): Promise<string[]> {
  const errorMessages: string[] = [];
  if (!role.trim().length) {
    errorMessages.push("Role is empty");
  }

  const roleList = (await roleRepo.getRoleNames()).map((r) => r.toLowerCase());
  if (roleList.includes(role.toLowerCase())) {
    errorMessages.push("Role already exist");
  }

  return errorMessages;
}

export async function getAllRoles() {
  return await roleRepo.getAllRoles();
}

export async function getRoleNames() {
  return await roleRepo.getRoleNames();
}

export async function addRole(newRole: Role) {
  await roleRepo.createRole(newRole);
}
