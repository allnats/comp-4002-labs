import { DbRoleType } from "../models/dbModel";
import * as roleRepo from "../repositories/roleRepo";

export async function getAllRoles() {
  return await roleRepo.getAllRoles();
}

export async function getRoleNames() {
  return await roleRepo.getRoleNames();
}

export async function addRole(newRole: DbRoleType) {
  return await roleRepo.createRole(newRole);
}
