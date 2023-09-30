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
          className="mt-12 grid grid-cols-1 h-fit place-items-center font-thin md:w-3/4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <aside className="md:w-1/2">
            <img src="images/dg_sucess_three.jpg" alt="Directeur Général de Sucess Three" />
            <h2 className="mt-12 text-center">{t(`team.director.name`)}</h2>
            <p className="text-justify">{t(`team.director.description`)}</p>
          </aside>
          <section className="mt-12 flex flex-col md:grid md:grid-cols-2 gap-12 md:h-auto mb-12">
            <img src="images/team_working_1.jpg" className="h-full" alt="" />
            <img src="images/team_working.jpg" className="h-full" alt="" />
          </section>
        </motion.div>
      </div>
    </Container>
  );

}