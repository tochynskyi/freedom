import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { useUser } from "reactfire";
import { LoginPage } from "../user/LoginPage/LoginPage";
import { UserPage } from "../user/UserPage/UserPage";
import { AdminPage } from "../admin/AdminPage/AdminPage";

function App() {
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  const { data, firstValuePromise } = useUser();

  useEffect(() => {
    firstValuePromise.then(() => setIsUserLoaded(true));
  }, [firstValuePromise, setIsUserLoaded]);

  if (!isUserLoaded) {
    return null;
  }
  return (
    <Routes>
      <Route element={<PrivateRoute user={data} />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>
      <Route path="/" element={<UserPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<UserPage />} />
    </Routes>
  );
}

export default App;
