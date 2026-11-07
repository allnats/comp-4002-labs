import * as roleRepo from "../repositories/roleRepo";
import type Role from "@shared/types/role";

export async function getAllRoles() {
  return await roleRepo.getAllRoles();
}

export async function getRoleNames() {
  return await roleRepo.getRoleNames();
}

export async function addRole(newRole: Role) {
  await roleRepo.createRole(newRole);
}
