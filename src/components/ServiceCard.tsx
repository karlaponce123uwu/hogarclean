
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-card p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-4">
        <div className="text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link}>
        <Button variant="link" className="text-primary font-medium hover:text-primary-hover p-0">
          Ver más →
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
