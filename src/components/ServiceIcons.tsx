
import React from 'react';
import { Scissors, Wrench, Lightbulb, TreeDeciduous, Trash } from 'lucide-react';

export const ServiceIcons: { [key: string]: React.ReactNode } = {
  limpieza: <Scissors size={24} />,
  fontaneria: <Wrench size={24} />,
  electricidad: <Lightbulb size={24} />,
  jardineria: <TreeDeciduous size={24} />,
  'limpieza-terrenos': <Trash size={24} />
};

export default ServiceIcons;
