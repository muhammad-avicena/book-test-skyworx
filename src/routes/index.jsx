import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  DashboardPage,
  NotFoundPage,
  AddBookPage,
  EditBookPage,
} from "../pages";
import { ProtectedRoute } from "../services";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/add-book" element={<AddBookPage />} />
          <Route path="/edit-book/:id" element={<EditBookPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
