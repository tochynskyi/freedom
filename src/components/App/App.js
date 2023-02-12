import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../user/LoginPage/LoginPage";
import { UserPage } from "../user/UserPage/UserPage";
import { AdminPage } from "../admin/AdminPage/AdminPage";
import  PrivateRoute  from "../PrivateRoute/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<UserPage />} />
      <Route path="*" element={<UserPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
}

export default App;
