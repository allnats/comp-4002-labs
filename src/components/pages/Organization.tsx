import type Role from "../../models/role";
import data from "./../../data/org-roles.json";

const organizationData: Role[] = data;

function Organization() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {organizationData.map((data) => (
            <tr key={`${data.firstName}${data.lastName}`}>
              <td>{data.role}</td>
              <td>{`${data.firstName} ${data.lastName}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Organization;
