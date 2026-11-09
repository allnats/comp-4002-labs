import { prisma } from "../db/prisma";
import { type DbRoleType } from "../models/dbModel";

export async function getAllRoles() {
  const roles = await prisma.roles.findMany({
    select: {
      name: true,
      employee: {
        select: {
          firstname: true,
          lastname: true,
        },
      },
    },
  });

  return roles.map((role) => ({
    name: role.name,
    firstname: role.employee.firstname,
    lastname: role.employee.lastname,
  }));
}

export async function getRoleNames() {
  const rolesNames = await prisma.roles.findMany({
    select: {
      name: true,
    },
  });

  return rolesNames.map((r) => r.name);
}

export async function createRole(newRole: Omit<DbRoleType, "id">) {
  const { name, employee_id } = newRole;

  const newDbRole = await prisma.roles.create({
    data: {
      name,
      employee_id,
    },
  });

  return newDbRole;
}
