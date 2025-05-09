import Header from "./Header";
import Stepper from "./Stepper";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="w-full">
        <div className="w-full mx-auto max-w-7xl">
          <Header />
          <Stepper />
        </div>
      </div>
      <main className="flex-grow w-full overflow-x-hidden">
        <div className="w-full mx-auto max-w-7xl">{children}</div>
      </main>
    </div>
  );
}
