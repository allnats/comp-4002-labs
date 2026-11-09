import type Role from "../../models/role";
import { NewRole } from "../../models/role";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const endpoint = `${baseUrl}/api/roles`;

async function readJson<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return (await response.json()) as T;
}

export async function getAllRoles() {
  const response = await fetch(endpoint);
  return await readJson<Role[]>(response);
}

export async function getRoleNames() {
  const response = await fetch(`${endpoint}/titles`);
  return await readJson<string[]>(response);
}

export async function createRole(newRole: NewRole) {
  try {
    const { name, employee_id } = newRole;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, employee_id }),
    });

    return await readJson<{ id: number; name: string; employee_id: number }>(
      response,
    );
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
