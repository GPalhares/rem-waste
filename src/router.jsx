import { Routes, Route, Navigate } from "react-router-dom";
import Skip from "./pages/Skip";
import NotFound from "./pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/skip" replace />} />
      <Route path="/skip" element={<Skip />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
