import { Routes, Route } from "react-router";

import Layout from "./components/common/layout/Layout";
import EmployeeDirectory from "./components/pages/EmployeeDirectory";
import Organization from "./components/pages/Organization";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Organization />} />

          <Route index path="/organization" element={<Organization />} />
          <Route index path="/employees" element={<EmployeeDirectory />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
