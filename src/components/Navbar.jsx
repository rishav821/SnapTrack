import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = ({ hideAuthButtons }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/home" className="flex items-center">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">SnapTrack</span>
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className={`${
                    item.label === "Scan"
                      ? "bg-gradient-to-r from-orange-500 to-orange-800 text-white" // Static gradient for Scan
                      : location.pathname === item.href
                      ? "bg-neutral-700 text-white" // Active link styling
                      : ""
                  } py-2 px-4 rounded-md transition`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {!hideAuthButtons && (
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <Link to="/login" className="py-2 px-3 border rounded-md">
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              >
                Create an account
              </Link>
            </div>
          )}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link
                    to={item.href}
                    className={`${
                      item.label === "Scan"
                        ? "bg-gradient-to-r from-orange-500 to-orange-800 text-white" // Static gradient for Scan
                        : location.pathname === item.href
                        ? "bg-neutral-700 text-white" // Active link styling
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {!hideAuthButtons && (
              <div className="flex space-x-6">
                <Link to="/login" className="py-2 px-3 border rounded-md">
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
                >
                  Create an account
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
