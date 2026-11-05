import "./Organization.css";
import Header from "../common/header/Header";
import OrganizationForm from "../OrganizationForm";
import useOrganization from "../hooks/useOrganization";

function Organization() {
  const { roles, createNewRole } = useOrganization();

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
            {roles.map((data) => (
              <tr key={`${data.firstName}${data.lastName}`}>
                <td>{data.role}</td>
                <td>{`${data.firstName} ${data.lastName}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <OrganizationForm createNewRole={createNewRole} />
    </>
  );
}

export default Organization;
