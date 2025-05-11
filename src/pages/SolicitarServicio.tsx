
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceForm, { ServiceFormData } from '../components/ServiceForm';

const SolicitarServicio = () => {
  const handleSubmitForm = (formData: ServiceFormData) => {
    console.log('Formulario enviado:', formData);
    // La redirección a WhatsApp se maneja dentro del componente ServiceForm
  };

  return (
    <>
      <NavBar />
      
      <section className="bg-gradient-to-r from-primary to-blue-600 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            Solicita tu servicio
          </h1>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Completa los detalles de tu servicio</h2>
              <p className="text-gray-600 mb-8 text-center">
                Proporciona la información necesaria y te contactaremos por WhatsApp para confirmar tu solicitud.
              </p>
              
              <ServiceForm onSubmit={handleSubmitForm} />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-center">¿Cómo funciona?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-card">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Completa el formulario</h3>
              <p className="text-gray-600">Selecciona el servicio y proporciona los detalles necesarios.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-card">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Envía por WhatsApp</h3>
              <p className="text-gray-600">Envía tu solicitud directamente a nuestro WhatsApp con un solo clic.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-card">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Confirmación</h3>
              <p className="text-gray-600">Recibirás la confirmación y detalles del servicio por WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default SolicitarServicio;
