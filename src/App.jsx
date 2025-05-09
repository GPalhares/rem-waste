import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}
