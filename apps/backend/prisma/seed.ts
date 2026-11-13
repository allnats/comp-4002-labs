import "dotenv/config";

import { Prisma, PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import sampleDepartments from "./data/sampleDepartments";
import sampleEmployees from "./data/sampleEmployees";
import sampleRoles from "./data/sampleRoles";

const adapter = new PrismaPg({
  connectionString: process.env.STORAGE_DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.$transaction(async (tx) => {
    await tx.roles.deleteMany();
    await tx.employees.deleteMany();
    await tx.departments.deleteMany();

    // found this simpler option without using hash maps.
    // This forces postgresql to reset the PK sequence.
    await tx.$executeRawUnsafe(`
      TRUNCATE TABLE "Roles", "Employees", "Departments"
      RESTART IDENTITY CASCADE
    `);

    // seed departments
    for (const department of sampleDepartments) {
      const created = await tx.departments.create({
        data: {
          name: department.name,
        },
      });
    }

    // seed employees
    for (const employees of sampleEmployees) {
      const created = await tx.employees.create({
        data: {
          firstname: employees.firstname,
          lastname: employees.lastname,
          department_id: employees.department_id,
        },
      });
    }

    // seed roles
    for (const role of sampleRoles) {
      const created = await tx.roles.create({
        data: {
          name: role.name,
          employee_id: role.employee_id,
        },
      });
    }

    console.log(
      `Seeded ${sampleEmployees.length} employees, ` +
        `Seeded ${sampleDepartments.length} departments, ` +
        `Seeded ${sampleRoles.length} roles`,
    );
  });
}

main()
  .catch((err) => {
    console.error(`Seeding failed: ${err}`);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
