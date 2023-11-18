import React from 'react';
import Image from 'next/image';

//Este Componente esta construido usando El patrón de diseño Compound Component Pattern 

// Definición de las propiedades que puede recibir el componente HomeBanner
interface HomeBannerProps {
  children: React.ReactNode;
  imageUrl: string;
}

// Definición de las propiedades que puede recibir el componente Title
interface TitleProps {
  children: React.ReactNode;
}

// Definición de las propiedades que puede recibir el componente Paragraph
interface ParagraphProps {
  children: React.ReactNode;
}

// Componente principal HomeBanner que acepta propiedades children e imageUrl
const HomeBanner: React.FC<HomeBannerProps> & {
  Title: React.FC<TitleProps>;
  Paragraph: React.FC<ParagraphProps>;
} = ({ children, imageUrl }) => {
  return (
    <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8rounded-lg">
      <div className='mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center rounded-lg'>
        {/* Renderiza los children que se le pasan al componente */}
        {children}
        {/* Renderiza la imagen utilizando la librería next/image */}
        <div className='w-1/3 relative aspect-video'>
          <Image
            src={imageUrl}
            fill
            alt="Banner Image"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

// Componente funcional Title que acepta propiedades children
const Title: React.FC<TitleProps> = ({ children }) => (
  <div>
    {/* Renderiza un título con estilos específicos */}
    <h1 className='text-3xl md:text-5xl font-bold text-white mb-4'>{children}</h1>
  </div>
);

// Componente funcional Paragraph que acepta propiedades children
const Paragraph: React.FC<ParagraphProps> = ({ children }) => (
  <div>
    {/* Renderiza un párrafo con estilos específicos */}
    <p className='text-lg md:text-xl text-white mb-2'>{children}</p>
  </div>
);

// Asigna los componentes Title y Paragraph al componente HomeBanner
HomeBanner.Title = Title;
HomeBanner.Paragraph = Paragraph;

export default HomeBanner;
