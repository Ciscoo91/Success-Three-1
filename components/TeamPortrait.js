import React, { useState } from "react";
import Container from "./container";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal"
import { useTranslation } from "react-i18next";



export default function Services() {

  const {t} = useTranslation()

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const lineStyle = "text-2xl sm:text-2xl 2xl:text-3xl";


  return (
    <Container extraClasses="About-Container">
      <div className="flex flex-col items-center py-28 relative lg:py-36" id="services">
        <div className="mb-6 w-full flex flex-col">
            <p className="text-palette-blue font-montrealRegular self-start">Team</p>
        </div>
        <motion.div
          ref={ref}
          className="mt-12 flex flex-col md:grid md:grid-cols-2 gap-8 h-fit place-items-stretch font-thin md:w-3/4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <aside className="col-start-1 col-end-2 flex flex-col items-center">
            <img src="images/dg_sucess_three.jpg" className="md:w-[300px] h-[400px]" alt="Directeur Général de Sucess Three" />
            <h2 className="mt-12 text-center">{t(`team.ceo.name`)}</h2>
            <p className="text-justify">{t(`team.ceo.description`)}</p>
          </aside>
          <aside className="col-start-2 col-end-3 flex flex-col items-center">
            <img src="images/dg_adjoint.jpeg" className="md:w-[300px] h-[400px]" alt="Directeur Général Adjoint de Sucess Three" />
            <h2 className="mt-12 text-center">{t(`team.deputyCEO.name`)}</h2>
            <p className="text-justify">{t(`team.deputyCEO.description`)}</p>
          </aside>
        </motion.div>
      </div>
    </Container>
  );

}