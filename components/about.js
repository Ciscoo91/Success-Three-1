import React, { forwardRef } from "react";
import Container from "./container";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const lineStyle = "font-futuraLight text-base sm:text-2xl 2xl:text-3xl";

  const content = [
    
       <><span className="text-palette-orange">Chez AFM Motors</span>, nous sommes passionnés par les voitures et nous sommes fiers de fournir des services de réparation automobile professionnels et fiables à nos clients. 
       "Nous sommes une entreprise familiale avec une longue histoire de service à la communauté locale.</>,

       <>
       Nous avons une équipe de <span className="text-palette-orange">mécaniciens qualifiés</span> et expérimentés qui peuvent prendre en charge tous les types de réparations et d'entretiens automobiles, des petites réparations aux révisions complètes.
       </>,
       <>
       Nous nous engageons à offrir <span className="text-palette-orange">un service de qualité</span> supérieure à des prix abordables pour satisfaire les besoins de nos clients. Contactez-nous dès maintenant pour discuter de vos besoins automobiles et découvrir comment nous pouvons vous aider à prendre soin de votre voiture.
       </>
      
    
    
  ];

  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const listItemVariants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
  };

  return (
    <Container extraClasses="About-Container py-16 text-palette-blue relative md:py-24 lg:py-36" id="apropos" >
      <motion.ul
        ref={ref}
        className="grid grid-cols-1 gap-y-10 font-thin text-center mx-auto sm:max-w-[80%]"
        variants={listVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {content.map((item, index) => (
          <motion.li key={index} variants={listItemVariants} className={lineStyle}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </Container>
  );
}