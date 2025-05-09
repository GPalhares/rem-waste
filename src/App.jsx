import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import Layout from "./components/layout/Layout";
import { SkipProvider } from "./context/SkipContext";

export default function App() {
  return (
    <BrowserRouter>
      <SkipProvider>
        <div className="min-h-screen w-full">
          <Layout>
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <AppRoutes />
            </div>
          </Layout>
        </div>
      </SkipProvider>
    </BrowserRouter>
  );
}
