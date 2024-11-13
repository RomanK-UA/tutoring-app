import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { menuItemsData } from "./menuItemsData";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <Router>
      <div className="max-h-screen h-full max-w-full w-full relative flex flex-col bg-cyan-300">
        <button onClick={toggleMenu} className="p-2 text-2xl self-start z-20">
          <IoMdMenu />
        </button>

        {/* Overlay to close the menu when clicked */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleMenu}
          />
        )}

        {/* Sidebar Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-60 bg-white transform transition-transform duration-300 ease-in-out z-30 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Menu />
        </div>
        <main className="h-full flex-grow m-auto flex justify-center items-center w-full text-center">
          <Routes>
            {menuItemsData.map((item) => (
              <Route
                key={item.path}
                path={item.path}
                element={<item.component />}
              />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
