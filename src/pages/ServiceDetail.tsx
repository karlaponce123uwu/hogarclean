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
      "https://www.kipclin.com/images/imagen_2022-06-24_165945025.png",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://elnuevooriente.com/wp-content/uploads/2020/05/limpieza_hogar.jpg"
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
      "https://calahondaservicios.com/wp-content/uploads/2023/11/Que-se-hace-en-fontaneria.webp",
      "https://www.netjet.es/wp-content/uploads/2023/05/Los-beneficios-de-contar-con-un-sistema-de-fontaneria-moderno-y-actualizado.webp",
      "https://www.sofimarsuministros.com/hazte-con-los-suministros-de-fontaneria-en-pontevedra_img13269t7m4w960h640.jpg"
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
      "https://www.tecsaqro.com.mx/wp-content/uploads/2022/09/electricista_como_profesion.jpg",
      "https://www.apiem.org/wp-content/uploads/2022/08/5df5e3200851db4f5c3aaf5f91ebb6fe_XL.jpeg",
      "https://todoferreteria.com.mx/wp-content/uploads/2023/10/1-1.png"
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
      "https://blog.homedepot.com.mx/wp-content/uploads/2019/10/Portada_Principiantes_01.jpg",
      "https://podapp.com.ar/wp-content/uploads/2024/03/los-servicios-de-jardineria-mas-requeridos-a-nivel-mundial.webp",
      "https://theressa.net/images/articles/5e42c6bd65ac9-image-asset.jpeg"
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
      "https://limpiezadeparcela.com/wp-content/uploads/elementor/thumbs/silvestre-6-scaled-qgnce5l0tuq4vsl94y20v0io8ngx7ll9o284j3dmp4.jpg",
      "https://sierrajardin.com/wp-content/uploads/2021/02/limpieza-de-parcelas-Sierra-jardi%CC%81n.jpg",
      "https://gruponetsoft.com/elolimpico.com.py/images/demo/portfolio/limpieza-terrenos.png"
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
