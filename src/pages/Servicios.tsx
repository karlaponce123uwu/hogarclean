
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { Scissors, Wrench, Lightbulb, TreeDeciduous, Trash } from 'lucide-react';

const Servicios = () => {
  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Ofrecemos soluciones profesionales para todas las necesidades de tu hogar
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Limpieza del Hogar"
              description="Servicio de limpieza profunda para mantener tu casa impecable. Incluye limpieza de habitaciones, baños, cocina y áreas comunes."
              icon={<Scissors size={24} />}
              link="/servicios/limpieza"
            />
            <ServiceCard
              title="Fontanería"
              description="Reparación de tuberías, desagües, instalación de grifos, reparación de fugas y solución de problemas de agua en el hogar."
              icon={<Wrench size={24} />}
              link="/servicios/fontaneria"
            />
            <ServiceCard
              title="Electricidad"
              description="Instalación y reparación de circuitos eléctricos, enchufes, interruptores, iluminación y solución de problemas eléctricos."
              icon={<Lightbulb size={24} />}
              link="/servicios/electricidad"
            />
            <ServiceCard
              title="Jardinería"
              description="Mantenimiento de jardines, poda de árboles y arbustos, corte de césped, plantación y diseño de espacios verdes."
              icon={<TreeDeciduous size={24} />}
              link="/servicios/jardineria"
            />
            <ServiceCard
              title="Limpieza de Terrenos"
              description="Limpieza y acondicionamiento de terrenos, eliminación de maleza, escombros y preparación para construcción o jardinería."
              icon={<Trash size={24} />}
              link="/servicios/limpieza-terrenos"
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Servicios;
