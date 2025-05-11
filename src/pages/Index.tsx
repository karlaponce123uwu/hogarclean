import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQAccordion from '../components/FAQAccordion';
import { Scissors, Wrench, Lightbulb, TreeDeciduous, Trash } from 'lucide-react';
import ServiceIcons from '../components/ServiceIcons';

const Index = () => {
  const faqs = [
    {
      question: "¿Cómo funciona el proceso de solicitud?",
      answer: "Simplemente elige el servicio que necesitas, completa el formulario con la fecha, hora y dirección, y envía la solicitud por WhatsApp. Nuestro equipo te responderá para confirmar los detalles."
    },
    {
      question: "¿Cuáles son los métodos de pago aceptados?",
      answer: "Aceptamos pagos en efectivo y transferencia bancaria."
    },
    {
      question: "¿Puedo reprogramar o cancelar un servicio?",
      answer: "Sí, puedes reprogramar o cancelar un servicio con al menos 24 horas de anticipación sin ningún cargo adicional."
    },
    {
      question: "¿Los materiales están incluidos en el precio?",
      answer: "Para servicios de limpieza, incluimos los productos básicos. Para fontanería, electricidad y jardinería, el costo de los materiales se cotiza por separado según las necesidades específicas."
    },
    {
      question: "¿Ofrecen garantía en los servicios?",
      answer: "Sí, todos nuestros servicios tienen una garantía de satisfacción."
    }
  ];

  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in">
                ¿Necesitas ayuda en casa? <br />
                <span className="text-yellow-300">¡Solicita tu servicio ahora!</span>
              </h1>
              <p className="text-xl mb-8 animate-slide-up">
                Servicios profesionales a domicilio para todas tus necesidades. Rápido, confiable y al mejor precio.
              </p>
              <div className="space-x-4 animate-slide-up">
                <Link 
                  to="/solicitar" 
                  className="btn btn-primary bg-white text-primary hover:bg-gray-100 py-3 px-6 rounded-lg shadow-button"
                >
                  Solicitar Servicio
                </Link>
                <Link 
                  to="/servicios" 
                  className="btn py-3 px-6 rounded-lg border border-white text-white hover:bg-white/10"
                >
                  Ver Servicios
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Servicios para el hogar" 
                className="rounded-lg shadow-lg animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios profesionales para mantener tu hogar en perfectas condiciones.
            </p>
          </div>
          
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
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">¿Listo para mejorar tu hogar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Solicita nuestros servicios ahora y recibe atención rápida y profesional.
          </p>
          <Link 
            to="/solicitar" 
            className="btn bg-white text-primary hover:bg-gray-100 py-3 px-8 rounded-lg shadow-button text-lg"
          >
            Solicitar Ahora
          </Link>
        </div>
      </section>
      
     
      
      {/* FAQ Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Resolvemos tus dudas sobre nuestros servicios.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
