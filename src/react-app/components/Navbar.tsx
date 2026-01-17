import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
            <span className="text-xl font-semibold text-gray-900">Truebuddies</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/product" className="text-gray-700 hover:text-gray-900 transition-colors">
              Product
            </Link>
            <Link to="/integrations" className="text-gray-700 hover:text-gray-900 transition-colors">
              Integrations
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-gray-900 transition-colors">
              Resources
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </Link>
            <Link
              to="/demo"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link
              to="/product"
              className="block py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Product
            </Link>
            <Link
              to="/integrations"
              className="block py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Integrations
            </Link>
            <Link
              to="/pricing"
              className="block py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/resources"
              className="block py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/demo"
              className="block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Request Demo
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
