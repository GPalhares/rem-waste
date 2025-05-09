import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Page Not Found
      </h2>

      <div className="max-w-2xl mb-8">
        <p className="text-gray-600 mb-4">
          This is a code challenge for Rem Waste company, demonstrating the
          implementation of a skip hire booking system.
        </p>
        <p className="text-gray-600">
          Thank you for the opportunity to participate in this challenge. I'm
          excited to showcase my skills and contribute to Rem Waste's mission.
        </p>
      </div>

      <CustomButton
        onClick={() => navigate("/skip")}
        className="text-base py-3 px-6"
      >
        Return to Skip Selection
      </CustomButton>
    </div>
  );
}
