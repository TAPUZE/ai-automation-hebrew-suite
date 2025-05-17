import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">HolyLand Connect</h2>
            <p className="text-gray-300 mb-4">
              פתרון אוטומציה מתקדם המשלב AI והקלטות שיחה עם אינטגרציה מלאה לCRM
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://wa.me/972585315415" className="text-gray-300 hover:text-brand">
                <MessageSquare className="h-6 w-6" />
              </a>
              <a href="tel:+972585315415" className="text-gray-300 hover:text-brand">
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  ראשי
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-300 hover:text-white">
                  יכולות
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-white">
                  פתרונות
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  אודות
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">פתרונות</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions#real-estate" className="text-gray-300 hover:text-white">
                  נדל״ן
                </Link>
              </li>
              <li>
                <Link to="/solutions#services" className="text-gray-300 hover:text-white">
                  נותני שירות
                </Link>
              </li>
              <li>
                <Link to="/solutions#logistics" className="text-gray-300 hover:text-white">
                  לוגיסטיקה
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">צור קשר</h3>
            <p className="text-gray-300 mb-2">רח׳ החקלאי 24, מנחמיה</p>
            <p className="text-gray-300 mb-2">
              <a href="mailto:office@holylandconnect.com">office@holylandconnect.com</a>
            </p>
            <p className="text-gray-300">
              <a href="tel:+972585315415">972-58-5315415+</a>
            </p>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center">
          <p className="text-gray-400">
            &copy; {currentYear} HolyLand Connect. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
