import React from "react";
import Container from "./container";
import { motion, m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sectionImage from "../public/images/vision-image.jpg";
import { useTranslation } from "react-i18next";

export default function Stats() {

  const {t} = useTranslation()

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const lineStyle =
    " carousel-textLine font-montrealRegular line  sm:text-xl  md:text-2xl";
  const lines = [
    
    "Turn your vision into reality with us",
    "where innovation and strategy propel",
  "your business to new heights."
  ];


  const stats = [
  { id: 1, name: 'Federation des Entreprises du Congo', value: 'images/FEC.jpeg' },
  { id: 2, name: 'Gecamines', value: 'images/gecamines.jpg' },
  { id: 3, name: 'Milvest VSB Consulting', value: 'images/logo_milvest.jpeg' },
]

  return (
    <div ref={ref} className="relative h-[45vh] overflow-hidden flex flex-col justify-center">
      <Container extraClasses="relative bg-palette-blue rounded-b-[2rem] h-full">
        <main >
          <div className=" w-12/12 relative">
            <motion.div>
              <div className="bg-palette-lightOpacity py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
                    <h4 className="text-3xl text-white mb-12">{t(`services.stats`)}</h4>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat, index) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-slate-200">{stat.name}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                            {/* {t(`services.stats.${index}.value`)} */}
                            <img src={stat.value} alt={`partenaires ${stat.name}`} className="w-" />
                        </dd>
                        </div>
                    ))}
                    </dl>
                </div>
                </div>
            </motion.div>
          </div>
        </main>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? {
          opacity: 1, transition: {
            duration: 0.8,
            ease: "easeInOut",
          }
        } : {}}


        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <img
          style={{ minWidth: "100%", height: "100%" }}
          src={sectionImage.src}
          alt="bg"
        />
        <div className="absolute top-0 w-screen h-screen bg-palette-blue opacity-70" />
      </motion.div>
    </div>
  );
}
