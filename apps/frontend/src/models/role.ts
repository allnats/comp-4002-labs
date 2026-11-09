import type Employee from "./employee";

export default interface Role extends Employee {
  name: string;
}

export type NewRole = Omit<Role, "firstName" | "lastName">;

export { type Role };
