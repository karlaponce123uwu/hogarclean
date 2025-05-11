import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Scissors, Wrench, Lightbulb, TreeDeciduous, Trash } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Define a map of service slugs to their details
const serviceDetails = {
  limpieza: {
    title: 'Limpieza del Hogar',
    description: 'Servicio de limpieza profunda para mantener tu casa impecable. Incluye limpieza de habitaciones, baños, cocina y áreas comunes.',
    icon: <Scissors size={28} />,
    images: [
      "/placeholder.svg",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    fullDescription: `
      <p>Nuestro servicio de limpieza del hogar está diseñado para mantener tu espacio impecable y saludable. Contamos con personal profesional que utiliza productos de alta calidad y técnicas eficientes para garantizar resultados excepcionales.</p>
      
      <p>El servicio incluye:</p>
      <ul>
        <li>Limpieza profunda de todas las habitaciones</li>
        <li>Limpieza y desinfección de baños</li>
        <li>Limpieza completa de cocina incluyendo electrodomésticos</li>
        <li>Aspirado y trapeado de pisos</li>
        <li>Limpieza de ventanas interiores</li>
        <li>Eliminación de polvo en superficies y muebles</li>
        <li>Limpieza de áreas comunes</li>
      </ul>
      
      <p>Ofrecemos servicios puntuales o planes recurrentes semanales, quincenales o mensuales con descuentos especiales.</p>
    `,
    pricing: [
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
    title: 'Fontanería',
    description: 'Reparación de tuberías, desagües, instalación de grifos, reparación de fugas y solución de problemas de agua en el hogar.',
    icon: <Wrench size={28} />,
    images: [
      "/placeholder.svg",
      "https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    fullDescription: `
      <p>Nuestro servicio de fontanería profesional resuelve cualquier problema relacionado con el sistema de agua de tu hogar. Desde pequeñas reparaciones hasta instalaciones completas, nuestros técnicos certificados están equipados para manejar todo tipo de situaciones.</p>
      
      <p>El servicio incluye:</p>
      <ul>
        <li>Reparación de tuberías y desagües obstruidos</li>
        <li>Instalación y reparación de grifos, duchas y bañeras</li>
        <li>Detección y reparación de fugas</li>
        <li>Instalación y mantenimiento de calentadores de agua</li>
        <li>Reparación de inodoros</li>
        <li>Mantenimiento preventivo del sistema de plomería</li>
        <li>Soluciones para problemas de presión de agua</li>
      </ul>
      
      <p>Todos nuestros servicios incluyen garantía y utilizamos materiales de primera calidad para asegurar durabilidad.</p>
    `,
    pricing: [
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
    title: 'Electricidad',
    description: 'Instalación y reparación de circuitos eléctricos, enchufes, interruptores, iluminación y solución de problemas eléctricos.',
    icon: <Lightbulb size={28} />,
    images: [
      "/placeholder.svg",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    fullDescription: `
      <p>Nuestros servicios de electricidad cubren todas las necesidades eléctricas de tu hogar. Contamos con electricistas cualificados que garantizan instalaciones seguras y reparaciones efectivas cumpliendo con todas las normativas.</p>
      
      <p>El servicio incluye:</p>
      <ul>
        <li>Instalación y reparación de circuitos eléctricos</li>
        <li>Montaje de enchufes, interruptores y puntos de luz</li>
        <li>Instalación de sistemas de iluminación</li>
        <li>Reparación de cortocircuitos</li>
        <li>Actualización de cuadros eléctricos</li>
        <li>Detección y solución de problemas eléctricos</li>
        <li>Instalación de sistemas de ahorro energético</li>
      </ul>
      
      <p>Todos nuestros trabajos cumplen con los estándares de seguridad y ofrecemos asesoramiento gratuito para mejorar la eficiencia energética.</p>
    `,
    pricing: [
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
    title: 'Jardinería',
    description: 'Mantenimiento de jardines, poda de árboles y arbustos, corte de césped, plantación y diseño de espacios verdes.',
    icon: <TreeDeciduous size={28} />,
    images: [
      "/placeholder.svg",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    fullDescription: `
      <p>Nuestro servicio de jardinería profesional mantiene y transforma tus áreas verdes. Combinamos técnicas modernas con conocimientos tradicionales para crear y mantener jardines saludables y atractivos.</p>
      
      <p>El servicio incluye:</p>
      <ul>
        <li>Diseño y planificación de jardines</li>
        <li>Mantenimiento regular de áreas verdes</li>
        <li>Poda especializada de árboles, arbustos y plantas ornamentales</li>
        <li>Corte y mantenimiento de césped</li>
        <li>Sistemas de riego e iluminación exterior</li>
        <li>Control de plagas y enfermedades en plantas</li>
        <li>Plantación de especies adaptadas al clima local</li>
      </ul>
      
      <p>Ofrecemos planes de mantenimiento mensuales o servicios puntuales según las necesidades de tu jardín.</p>
    `,
    pricing: [
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
  'limpieza-terrenos': {
    title: 'Limpieza de Terrenos',
    description: 'Limpieza y acondicionamiento de terrenos, eliminación de maleza, escombros y preparación para construcción o jardinería.',
    icon: <Trash size={28} />,
    images: [
      "/placeholder.svg",
      "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    fullDescription: `
      <p>Nuestro servicio de limpieza de terrenos transforma espacios abandonados o en mal estado en áreas listas para su uso. Utilizamos maquinaria especializada y seguimos protocolos de gestión de residuos responsables.</p>
      
      <p>El servicio incluye:</p>
      <ul>
        <li>Desbroce y limpieza completa del terreno</li>
        <li>Eliminación de maleza, arbustos no deseados y vegetación invasiva</li>
        <li>Retirada de escombros y residuos</li>
        <li>Nivelación básica del terreno</li>
        <li>Preparación para construcción o ajardinamiento</li>
        <li>Gestión adecuada de los residuos según normativas</li>
        <li>Asesoramiento sobre el aprovechamiento del espacio</li>
      </ul>
      
      <p>Realizamos una evaluación gratuita del terreno antes de proporcionarte un presupuesto detallado y sin compromiso.</p>
    `,
    pricing: [
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
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState<any>(null);

  useEffect(() => {
    // Check if the serviceId exists in our service details
    if (serviceId && serviceId in serviceDetails) {
      setService(serviceDetails[serviceId as keyof typeof serviceDetails]);
    }
  }, [serviceId]);

  if (!service) {
    return (
      <>
        <NavBar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Servicio no encontrado</h1>
          <p className="mb-6">Lo sentimos, el servicio que buscas no existe.</p>
          <Link to="/servicios">
            <Button>Volver a servicios</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
              <div className="text-primary">{service.icon}</div>
            </div>
            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl max-w-2xl">{service.description}</p>
          </div>
        </div>
      </section>
      
      {/* Service Detail Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            {/* Image Carousel */}
            {service.images && service.images.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Galería</h2>
                <Carousel className="w-full max-w-3xl mx-auto">
                  <CarouselContent>
                    {service.images.map((image: string, idx: number) => (
                      <CarouselItem key={idx}>
                        <AspectRatio ratio={16/9} className="bg-gray-100 rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${service.title} - Imagen ${idx + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </AspectRatio>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center mt-4">
                    <CarouselPrevious className="relative -left-0 mx-2" />
                    <CarouselNext className="relative -right-0 mx-2" />
                  </div>
                </Carousel>
              </div>
            )}
            
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: service.fullDescription }} 
            />
            
            {/* Pricing Section */}
            {service.pricing && (
              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-6">Precios</h2>
                
                {/* Desktop View: Side by Side Comparison */}
                <div className="hidden md:grid grid-cols-3 gap-8">
                  {service.pricing.map((option: any) => (
                    <div 
                      key={option.name}
                      className={`bg-white rounded-lg shadow-md p-8 border-2 ${
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
                        {option.features.map((feature: string, index: number) => (
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
                
                {/* Mobile View: Accordion */}
                <div className="md:hidden">
                  <Accordion type="single" collapsible className="w-full">
                    {service.pricing.map((option: any, index: number) => (
                      <AccordionItem key={index} value={`option-${index}`}>
                        <AccordionTrigger>
                          <div className="flex justify-between items-center w-full pr-4">
                            <span className="font-bold">{option.name}</span>
                            <span className="text-primary font-bold">L {option.price}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-500 mb-2">{option.details}</p>
                          <ul className="mb-4 space-y-2">
                            {option.features.map((feature: string, idx: number) => (
                              <li key={idx} className="flex items-center">
                                <svg className="h-4 w-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Link 
                            to="/solicitar" 
                            className="block text-center py-2 px-4 rounded-md bg-primary text-white hover:opacity-90 transition-opacity"
                          >
                            Seleccionar
                          </Link>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            )}
            
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">¿Interesado en este servicio?</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/solicitar">
                  <Button>Solicitar servicio</Button>
                </Link>
                <Link to="/contacto">
                  <Button variant="outline">Contáctanos</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ServiceDetail;
