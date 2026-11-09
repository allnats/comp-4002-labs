import type Employee from "./employee";

export default interface Role extends Employee {
  name: string;
  employee_id: number;
}

export type NewRole = Omit<Role, "firstName" | "lastName">;

export { type Role };
