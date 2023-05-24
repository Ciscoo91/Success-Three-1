import React, { forwardRef, useEffect } from "react";
import Container from "./container";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const items = [
    {
      title: "Réparation et entretien",
      content:
        "Chez AFM Motors, nos mécaniciens qualifiés et expérimentés prennent en charge tous les types de réparations.",
      img: "assets/icons/car-repair-car-svgrepo-com.svg",
    },
    {
      title: "Nettoyage de moteur",
      content:
        "Nous proposons un service de nettoyage de moteur complet qui permet de nettoyer en profondeur toutes les pièces du moteur.",
      img: "assets/icons/car-repair-svgrepo-com.svg",
    },
    {
      title: "Carrosserie",
      content:
        "Notre équipe de professionnels peut prendre en charge tous les travaux de carrosserie.",
      img: "assets/icons/automobile-body-car-svgrepo-com.svg",
    },
    {
      title: "Peinture et retouche",
      content:
        "Nous proposons des services de peinture et retouche pour donner un nouvel éclat à votre voiture et effacer les marques d'usure.",
      img: "assets/icons/car-painting-svgrepo-com.svg",
    },
    {
      title: "Simonisage",
      content:
        "Notre service de simonisage permet de redonner de la brillance à la carrosserie de votre voiture.",
      img: "assets/icons/car-wash-svgrepo-com.svg"
    },
    {
      title: "Tuning automobile",
      content:
        "Nous proposons des services de tuning automobile pour personnaliser et améliorer les performances de votre voiture.",
      img: "assets/icons/sport-car-svgrepo-com.svg",
    },
  ];

  const ServiceItem = ({ img,title,content }) => {
    const [ref, inView] = useInView({
      threshold: 0.3, // Trigger the animation when half the element is in view
      triggerOnce: true, 
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="service-container flex flex-col justify-center h-auto    md:h-[300px]  rounded-2xl transition duration-200 ease-in bg-[#38506B] bg-opacity-20 hover:shadow-lg hover:bg-opacity-60 p-4"
      >
        <img className="w-11 mb-5" src={img} alt={`${title} icon`}/>
        <div className="text-container">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
            className=" mb-0 sm:mb-3 text-gray-900 text-palette-orange text-xl  md:text-2xl"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
            className=" mt-2 text-base sm:text-xl text-white"
          >
            {content}
          </motion.p>
        </div>
      </motion.div>
    );
  };

  return (
    <Container extraClasses=" Services-Container py-20 bg-palette-blue rounded-[2rem] md:py-24 lg:py-24 relative" >
      <h1 className="font-futuraLight text-white font-normal text-xl sm:text-2xl underline underline-offset-8" id="services">
        Nos Services
      </h1>
      <motion.ul className="   grid grid-cols-1 gap-20 mt-24   md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ img,content,title}, index) => {
          return <ServiceItem key={index} img={img} content={content} title={title} />
        })}
      </motion.ul>
    </Container>
  );
}
