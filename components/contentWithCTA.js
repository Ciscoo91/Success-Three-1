import React from "react";
import Container from "./container";
import { motion, m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sectionImage from "../public/images/vision-image.jpg";
import {Link} from "react-scroll";

export default function ContentWithCTA() {
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

  return (
    <div ref={ref} className="relative h-[50vh] overflow-hidden flex flex-col justify-center">
      <Container extraClasses="relative bg-palette-blue rounded-b-[2rem] h-full">
        <main >
          <div className=" w-12/12 relative">
            <motion.div>
              {lines.map((line, index) => {
                return (
                  <m.div
                    className="first-title-line-container overflow-hidden"
                    key={index}
                  >
                    <motion.p
                      initial={{ y: 150 }}
                      animate={inView ? {
                        y: 0, transition: {
                          duration: 0.8,
                          delay: 0.7,
                          ease: [0.08, 0.82, 0.17, 1],
                        }
                      } : {}}
                      className="text-base sm:text-xl font-montrealMedium text-center text-white  text-opacity-100 mb-0  "
                    >
                      {line}
                    </motion.p>
                  </m.div>
                );
              })}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1, transition: { duration: 0.5, delay: 1.3, ease: "easeInOut" } } : {}}
            className="flex justify-center mt-8"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }} // Scale the element on hover
              className=" text-black  absolute cursor-pointer    text-opacity-100 bg-white bg-opacity-100 font-medium rounded-[30px] text-base h-auto w-auto sm:text-base  px-5 py-2.5 mr-2 mb-2  hover:transition duration-200 ease-in-out "
            >
              <div className="flex justify-center w-20">
                <Link to="contact" smooth={true} duration={800}>
                  Contact us
                </Link>
              </div>
            </motion.button>
          </motion.div>
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
