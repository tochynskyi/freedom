import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "../user/LoginPage/LoginPage";
import { UserPage } from "../user/UserPage/UserPage";
import { AdminPage } from "../admin/AdminPage/AdminPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route element={<PrivateRoutes />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
