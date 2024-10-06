import { Outlet } from "react-router-dom";
import "../../src/App.css";
import Header from "../components/Header";
const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-6 text-center bg-gray-800 mt-10">
        Made by Shivam-Kushwaha
      </div>
    </div>
  );
};
export default AppLayout;
