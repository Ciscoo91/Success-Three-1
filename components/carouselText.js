import React from "react";
import Container from "./container";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CarouselText() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const lineStyle = " carousel-textLine font-futuraLight line  sm:text-xl  md:text-2xl";
  const lines = [
    <>
    Vous cherchez un <span className="text-palette-orange">garage automobile</span> de confiance ?
    </>,
    "Notre galerie d'images vous montre les raisons pour lesquelles",
    <>nous sommes <span className="text-palette-orange">le choix idéal</span> pour prendre soin de votre voiture.</>,
  ];

  return (
    <Container extraClasses="About-Container py-16 text-palette-blue relative md:py-20 lg:py-28" >
      <motion.ul
        ref={ref}
        className="grid grid-cols-1 font-thin text-center mx-auto sm:max-w-[80%]"
        id="clients"
      >
        {lines.map((line, index) => (
          <motion.li
            key={index}
            className={lineStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={
              inView
                ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.3 } }
                : {}
            }
          >
            {line}
          </motion.li>
        ))}
      </motion.ul>
    </Container>
  );
}
