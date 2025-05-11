
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-semibold" : "text-gray-700 hover:text-primary";
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-primary text-xl font-bold">HogarClean</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive("/")} font-medium transition-colors`}>
              Inicio
            </Link>
            <Link to="/servicios" className={`${isActive("/servicios")} font-medium transition-colors`}>
              Servicios
            </Link>
            <Link to="/contacto" className={`${isActive("/contacto")} font-medium transition-colors`}>
              Contáctanos
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Link 
              to="/solicitar" 
              className="btn btn-primary py-2 px-4 rounded-lg"
            >
              Solicitar Servicio
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-2 px-4 absolute w-full">
          <div className="flex flex-col space-y-4 pb-3 pt-2">
            <Link 
              to="/" 
              className={`${isActive("/")} font-medium transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/servicios" 
              className={`${isActive("/servicios")} font-medium transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link 
              to="/contacto" 
              className={`${isActive("/contacto")} font-medium transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contáctanos
            </Link>
            <Link 
              to="/solicitar" 
              className="btn btn-primary py-2 px-4 rounded-lg w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar Servicio
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
