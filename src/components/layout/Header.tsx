
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand">AutomateAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            <Link
              to="/"
              className="px-4 py-2 text-gray-700 hover:text-brand transition-colors"
            >
              ראשי
            </Link>
            <Link
              to="/features"
              className="px-4 py-2 text-gray-700 hover:text-brand transition-colors"
            >
              יכולות
            </Link>
            <Link
              to="/solutions"
              className="px-4 py-2 text-gray-700 hover:text-brand transition-colors"
            >
              פתרונות
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 text-gray-700 hover:text-brand transition-colors"
            >
              אודות
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-gray-700 hover:text-brand transition-colors"
            >
              צור קשר
            </Link>
            <Link to="/demo">
              <Button className="bg-brand hover:bg-brand-dark text-white mr-3 flex items-center">
                <Calendar className="h-4 w-4 ml-2 rtl-flip" />
                תיאום הדגמה
              </Button>
            </Link>
          </nav>

          {/* Mobile hamburger button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-brand focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white pb-4">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="px-4 py-2 text-gray-700 hover:text-brand"
                onClick={() => setIsMenuOpen(false)}
              >
                ראשי
              </Link>
              <Link
                to="/features"
                className="px-4 py-2 text-gray-700 hover:text-brand"
                onClick={() => setIsMenuOpen(false)}
              >
                יכולות
              </Link>
              <Link
                to="/solutions"
                className="px-4 py-2 text-gray-700 hover:text-brand"
                onClick={() => setIsMenuOpen(false)}
              >
                פתרונות
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 text-gray-700 hover:text-brand"
                onClick={() => setIsMenuOpen(false)}
              >
                אודות
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 text-gray-700 hover:text-brand"
                onClick={() => setIsMenuOpen(false)}
              >
                צור קשר
              </Link>
              <Link
                to="/demo"
                className="px-4 py-2 bg-brand text-white rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                תיאום הדגמה
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
