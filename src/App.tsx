import { Routes, Route } from "react-router";

import Layout from "./components/common/layout/Layout";
import EmployeeDirectory from "./components/landing/EmployeeDirectory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EmployeeDirectory />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
