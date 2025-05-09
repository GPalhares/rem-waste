import { Routes, Route, Navigate } from "react-router-dom";
import Skip from "./pages/Skip";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/skip" replace />} />
      <Route path="/skip" element={<Skip />} />
    </Routes>
  );
};
