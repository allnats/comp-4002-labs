import type Role from "../../models/role";
import data from "./../../data/org-roles.json";

import "./Organization.css";
import Header from "../common/header/Header";
const organizationData: Role[] = data;

function Organization() {
  return (
    <>
      <Header title="Organization" greeting="Leadership and Management" />
      <div className="org-table-container">
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
      </div>
    </>
  );
}

export default Organization;
