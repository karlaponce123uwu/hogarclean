
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Precios = () => {
  const [activeTab, setActiveTab] = useState("limpieza");
  
  const servicePrices = {
    limpieza: {
      title: "Limpieza del Hogar",
      description: "Precios según el tamaño de la propiedad",
      options: [
        {
          name: 'Casa Pequeña',
          price: '500',
          details: 'Hasta 70m²',
          features: [
            'Limpieza completa de 1-2 habitaciones',
            'Limpieza de 1 baño',
            'Limpieza de sala y cocina pequeña',
            'Duración aproximada: 2-3 horas'
          ]
        },
        {
          name: 'Casa Mediana',
          price: '700',
          details: '70-120m²',
          features: [
            'Limpieza completa de 2-3 habitaciones',
            'Limpieza de 1-2 baños',
            'Limpieza de sala, comedor y cocina',
            'Duración aproximada: 3-5 horas'
          ],
          isPopular: true
        },
        {
          name: 'Casa Grande',
          price: '900',
          details: 'Más de 120m²',
          features: [
            'Limpieza completa de 3+ habitaciones',
            'Limpieza de 2+ baños',
            'Limpieza de áreas comunes amplias',
            'Duración aproximada: 5-8 horas'
          ]
        }
      ]
    },
    fontaneria: {
      title: "Fontanería",
      description: "Precios según la complejidad del problema",
      options: [
        {
          name: 'Problema Simple',
          price: '400',
          details: 'Reparaciones básicas',
          features: [
            'Grifos con goteo',
            'Desagües lentos',
            'Reemplazo de válvulas simples',
            'Duración aproximada: 1-2 horas'
          ]
        },
        {
          name: 'Problema Intermedio',
          price: '800',
          details: 'Reparaciones medias',
          features: [
            'Instalación de grifos y fregaderos',
            'Desbloqueo de tuberías',
            'Fugas menores',
            'Duración aproximada: 2-4 horas'
          ],
          isPopular: true
        },
        {
          name: 'Problema Complejo',
          price: '1200+',
          details: 'Reparaciones mayores',
          features: [
            'Sustitución de tuberías',
            'Reparación de sistemas completos',
            'Instalación de calentadores',
            'Duración aproximada: 4+ horas'
          ]
        }
      ]
    },
    electricidad: {
      title: "Electricidad",
      description: "Precios según el tipo de trabajo",
      options: [
        {
          name: 'Básico',
          price: '450',
          details: 'Instalaciones simples',
          features: [
            'Cambio de interruptores o enchufes',
            'Instalación de lámparas',
            'Diagnóstico de problemas eléctricos',
            'Duración aproximada: 1-2 horas'
          ]
        },
        {
          name: 'Intermedio',
          price: '850',
          details: 'Instalaciones medias',
          features: [
            'Instalación de ventiladores de techo',
            'Reparación de circuitos',
            'Actualización de paneles pequeños',
            'Duración aproximada: 2-4 horas'
          ],
          isPopular: true
        },
        {
          name: 'Especializado',
          price: '1500+',
          details: 'Sistemas complejos',
          features: [
            'Actualización de panel eléctrico completo',
            'Instalación de sistemas de seguridad',
            'Cableado para remodelaciones',
            'Duración aproximada: 4+ horas'
          ]
        }
      ]
    },
    jardineria: {
      title: "Jardinería",
      description: "Precios según el tamaño del jardín",
      options: [
        {
          name: 'Jardín Pequeño',
          price: '350',
          details: 'Hasta 50m²',
          features: [
            'Corte de césped',
            'Poda básica',
            'Limpieza general',
            'Duración aproximada: 1-2 horas'
          ]
        },
        {
          name: 'Jardín Mediano',
          price: '600',
          details: '50-150m²',
          features: [
            'Mantenimiento completo',
            'Poda de arbustos',
            'Fertilización',
            'Duración aproximada: 2-4 horas'
          ],
          isPopular: true
        },
        {
          name: 'Jardín Grande',
          price: '1000+',
          details: 'Más de 150m²',
          features: [
            'Servicio completo',
            'Poda de árboles',
            'Diseño paisajístico',
            'Duración aproximada: 4+ horas'
          ]
        }
      ]
    },
    terrenos: {
      title: "Limpieza de Terrenos",
      description: "Precios según el tamaño y estado del terreno",
      options: [
        {
          name: 'Terreno Pequeño',
          price: '1000',
          details: 'Hasta 200m²',
          features: [
            'Limpieza de maleza',
            'Remoción de escombros pequeños',
            'Nivelación básica',
            'Duración aproximada: 1 día'
          ]
        },
        {
          name: 'Terreno Mediano',
          price: '2500',
          details: '200-500m²',
          features: [
            'Limpieza completa',
            'Remoción de escombros medianos',
            'Preparación para construcción',
            'Duración aproximada: 2-3 días'
          ],
          isPopular: true
        },
        {
          name: 'Terreno Grande',
          price: '5000+',
          details: 'Más de 500m²',
          features: [
            'Limpieza industrial',
            'Remoción de estructuras',
            'Preparación completa',
            'Duración aproximada: 3+ días'
          ]
        }
      ]
    }
  };

  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Nuestros Precios</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Precios transparentes adaptados a tus necesidades específicas
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing Section with Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="limpieza" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
            <div className="mb-8">
              <TabsList className="w-full grid grid-cols-3 md:grid-cols-5 gap-2">
                <TabsTrigger value="limpieza">Limpieza</TabsTrigger>
                <TabsTrigger value="fontaneria">Fontanería</TabsTrigger>
                <TabsTrigger value="electricidad">Electricidad</TabsTrigger>
                <TabsTrigger value="jardineria">Jardinería</TabsTrigger>
                <TabsTrigger value="terrenos">Terrenos</TabsTrigger>
              </TabsList>
            </div>

            {Object.keys(servicePrices).map((serviceKey) => {
              const service = servicePrices[serviceKey as keyof typeof servicePrices];
              
              return (
                <TabsContent key={serviceKey} value={serviceKey} className="pt-4">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                  </div>
                  
                  {/* Desktop View: Side by Side Comparison */}
                  <div className="hidden md:grid grid-cols-3 gap-8">
                    {service.options.map((option) => (
                      <div 
                        key={option.name}
                        className={`bg-white rounded-lg shadow-lg p-8 border-2 ${
                          option.isPopular ? 'border-primary' : 'border-transparent'
                        } relative`}
                      >
                        {option.isPopular && (
                          <span className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg font-medium">
                            Popular
                          </span>
                        )}
                        <h3 className="text-2xl font-bold mb-1">{option.name}</h3>
                        <p className="text-gray-500 mb-4">{option.details}</p>
                        <div className="flex items-baseline mb-6">
                          <span className="text-4xl font-bold">L {option.price}</span>
                        </div>
                        <ul className="mb-8 space-y-2">
                          {option.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link 
                          to="/solicitar" 
                          className={`w-full block text-center py-2 px-4 rounded-md ${
                            option.isPopular ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'
                          } hover:opacity-90 transition-opacity`}
                        >
                          Seleccionar
                        </Link>
                      </div>
                    ))}
                  </div>
                  
                  {/* Mobile View: Table Format */}
                  <div className="md:hidden mb-8">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Opción</TableHead>
                          <TableHead>Precio</TableHead>
                          <TableHead>Detalles</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {service.options.map((option) => (
                          <TableRow key={option.name}>
                            <TableCell className="font-medium">
                              {option.name}
                              {option.isPopular && (
                                <span className="ml-2 inline-block bg-primary text-white text-xs px-2 py-0.5 rounded">
                                  Popular
                                </span>
                              )}
                            </TableCell>
                            <TableCell>L {option.price}</TableCell>
                            <TableCell>
                              <Button variant="link" asChild size="sm" className="p-0">
                                <Link to="/solicitar">Seleccionar</Link>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
          
          {/* Additional Info */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas un servicio personalizado?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contamos con planes personalizados para empresas y servicios recurrentes. Contacta con nosotros para recibir una cotización adaptada a tus necesidades específicas.
            </p>
            <Link to="/contacto">
              <Button size="lg" variant="outline">Solicitar Cotización Personalizada</Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Precios;
