
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MessageSquare, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HogarClean</h3>
            <p className="text-gray-400 mb-4">
              Servicios profesionales a domicilio para todas tus necesidades del hogar. 
              Rápido, confiable y al mejor precio.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-primary transition-colors">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-primary transition-colors">
                <Link to="/servicios">Limpieza del hogar</Link>
              </li>
              <li className="text-gray-400 hover:text-primary transition-colors">
                <Link to="/servicios">Fontanería</Link>
              </li>
              <li className="text-gray-400 hover:text-primary transition-colors">
                <Link to="/servicios">Electricidad</Link>
              </li>
              <li className="text-gray-400 hover:text-primary transition-colors">
                <Link to="/servicios">Jardinería</Link>
              </li>
              <li className="text-gray-400 hover:text-primary transition-colors">
                <Link to="/servicios">Limpieza de terrenos</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="text-primary mr-2" />
                <span className="text-gray-400">+504 9577-6690</span>
              </li>
              <li className="flex items-center">
                <MessageSquare size={18} className="text-primary mr-2" />
                <span className="text-gray-400">WhatsApp: +504 9577-6690</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary mr-2" />
                <span className="text-gray-400">hogarclean@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} HogarClean. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
