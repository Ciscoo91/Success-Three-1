import { useEffect } from "react";
import { m, motion, useViewportScroll } from "framer-motion";
import Container from "./container";
import { fade } from "../helpers/transitions";
import {Link} from "react-scroll"
import Image from "next/image";
import heroImage from "../public/images/hero-image.webp";

export default function Hero() {
  const delay = (i) => {
    if (i === 0) {
      return 0.5;
    } else if (i === 1) {
      return 0.7;
    } else if (i === 3) {
      return 0.9;
    } else {
      return i * 0.4;
    }
  };

  const titleLines = [
    " Des services de qualité",
    "supérieure pour votre voiture",
  ];
  const textLines = [
    "Chez AFM Motors, nous sommes fiers de fournir des services de",
    "réparation automobile professionnels et fiables à nos clients, des",
    "petites réparations aux révisions complètes, grâce à une équipe",
    "de mécaniciens qualifiés et expérimentés.",
  ];

  return (
    <div className="relative h-screen">
      <Container extraClasses="Hero-Container relative bg-palette-blue rounded-b-[2rem]">
        <main className="hero translate-y-[-50px] h-screen sm:h-screen flex flex-col justify-center  " id="apropos">
          <div className=" relative translate-y-[80px]">
            <div className=" hero-container w-12/12 text-center mx-auto">
              <motion.div className="title-container">
                {titleLines.map((line, index) => {
                  return (
                    <m.div className="first-title-line-container overflow-hidden" key={index}>
                      <motion.h1
                        initial={{ y: 150 }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.7,
                          ease: [0.08, 0.82, 0.17, 1],
                        }}
                        className="text-3xl text-white  text-opacity-100 mb-0  sm:text-4xl md:text-5xl lg:text-6xl"
                      >
                        {line}
                      </motion.h1>
                    </m.div>
                  );
                })}
              </motion.div>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1 } }}
              >
                {textLines.map((line, i) => {
                  const isFirst = i === 0 ? "mt-8 " : "mt-0";

                  return (
                    <motion.div className="overflow-hidden" key={i}>
                      <motion.li
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 1,
                          delay: delay(i),
                          staggerChildren: 0.2,
                          ease: [0.08, 0.82, 0.17, 1],
                        }}
                        className={`${isFirst} text-white hero-content mx-auto font-neue  text-opacity-100  text-gray-900   mb-0 w-12/12  sm:max-w-screen-lg     md:leading-normal md:text-xl  lg:text-2xl   `}
                      >
                        {line}
                      </motion.li>
                    </motion.div>
                  );
                })}
              </motion.ul>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, delay: 1.3, ease: "easeInOut" },
              }}
              className="flex justify-center mt-8"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }} // Scale the element on hover
                className=" text-white  absolute cursor-pointer    text-opacity-100 bg-palette-orange bg-opacity-100 font-medium rounded-[30px] text-sm w-30 sm:w-40 sm:text-lg  px-5 py-2.5 mr-2 mb-2  hover:bg-palette-lightOrange transition duration-100 ease-in-out"
              >
                <Link to="contact" smooth={true} duration={800}>
                Prenez Contact
                </Link>
              </motion.button>
            </motion.div>
          </div>
        </main>
      </Container>
    </div>
  );
}
