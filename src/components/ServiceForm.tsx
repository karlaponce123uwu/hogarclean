
import React, { useState } from 'react';
import { Calendar, Clock, Home, ChevronRight, MessageSquare } from 'lucide-react';

interface ServiceFormProps {
  onSubmit: (formData: ServiceFormData) => void;
}

export interface ServiceFormData {
  service: string;
  date: string;
  time: string;
  address: string;
  notes: string;
}

const ServiceForm = ({ onSubmit }: ServiceFormProps) => {
  const [formData, setFormData] = useState<ServiceFormData>({
    service: '',
    date: '',
    time: '',
    address: '',
    notes: ''
  });

  const services = [
    { value: 'limpieza', label: 'Limpieza del hogar' },
    { value: 'fontaneria', label: 'Fontanería' },
    { value: 'electricidad', label: 'Electricidad' },
    { value: 'jardineria', label: 'Jardinería' },
    { value: 'limpieza-terrenos', label: 'Limpieza de terrenos' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // WhatsApp URL generator
  const generateWhatsAppUrl = () => {
    const phone = '+50495776690'; // Replace with your actual WhatsApp number
    
    const selectedService = services.find(s => s.value === formData.service)?.label || formData.service;
    
    const message = `Hola, me gustaría solicitar un servicio de ${selectedService}
Fecha: ${formData.date}
Hora: ${formData.time}
Dirección: ${formData.address}
${formData.notes ? `Notas adicionales: ${formData.notes}` : ''}`;
    
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de servicio
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">Selecciona un servicio</option>
            {services.map(service => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                Fecha
              </div>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                Hora
              </div>
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center">
              <Home size={16} className="mr-1" />
              Dirección
            </div>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Calle, número, piso, ciudad"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center">
              <MessageSquare size={16} className="mr-1" />
              Notas adicionales (opcional)
            </div>
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            placeholder="Detalles adicionales sobre el servicio..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div className="pt-2">
          <a 
            href={generateWhatsAppUrl()} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn btn-primary py-3 px-6 rounded-lg flex items-center justify-center text-white"
            onClick={(e) => {
              const isFormValid = formData.service && formData.date && formData.time && formData.address;
              if (!isFormValid) {
                e.preventDefault();
                alert("Por favor, complete todos los campos requeridos.");
              }
            }}
          >
            <MessageSquare size={20} className="mr-2" />
            Solicitar por WhatsApp
            <ChevronRight size={18} className="ml-1" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
