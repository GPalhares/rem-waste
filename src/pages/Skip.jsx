import Header from "../components/Header";
import Stepper from "../components/Stepper";

export default function Skip() {
  return (
    <div className="main-container">
      <Header />
      <Stepper />
      <h1 className="text-2xl font-bold mt-8 text-center">
        Welcome to the Skip Page
      </h1>
      {/* Add more home page content here */}
    </div>
  );
}
