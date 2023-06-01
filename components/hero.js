import { useEffect } from "react";
import {
  m,
  motion,
} from "framer-motion";
import Container from "./container";
import { fade } from "../helpers/transitions";
import { Link } from "react-scroll";
import Image from "next/image";
import heroImage from "../public/images/hero-image.webp";
import HeroGallery from './HeroGallery';

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
    "Success Three",
  ];
  const textLines = [
    "Success Three is a premier service provider specializing in consultancy and operational support.", "Our expertise extends to both our own operations and those of our valued clients.", "With a focus on comprehensive services, we excel in various areas..."
  ];


  return (
    <div className="relative h-screen">
      <Container extraClasses="Hero-Container relative bg-palette-blue rounded-b-[2rem]">
        <main className="hero translate-y-[-50px] h-screen sm:h-screen flex flex-col justify-center" id="hero">
          <div className=" relative translate-y-[80px]">
            <div className=" hero-container w-12/12 relative">
              <motion.div className="title-container">
                {titleLines.map((line, index) => {
                  return (
                    <m.div
                      className="first-title-line-container overflow-hidden"
                      key={index}
                    >
                      <motion.h1
                        initial={{ y: 150 }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.7,
                          ease: [0.08, 0.82, 0.17, 1],
                        }}
                        className="text-3xl font-montrealMedium text-white  text-opacity-100 mb-0  sm:text-4xl md:text-5xl lg:text-6xl"
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
                className="my-6"
              >
                {textLines.map((line, i) => {
                  const isFirst = i === 0 ? "mt-4 " : "mt-0";

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
                        className={`${isFirst} text-[13px] font-montrealRegular hero-content mx-auto   text-opacity-100  text-white  mb-0 w-12/12      md:leading-normal md:text-xl  lg:text-2xl   `}
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
              className="flex  mt-4"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }} // Scale the element on hover
                className=" text-black  absolute cursor-pointer    text-opacity-100 bg-white bg-opacity-100 font-medium rounded-[30px] text-sm h-[48px] sm:text-lg  px-5 py-2.5 mr-2 mb-2 mt-6 hover:transition duration-100 ease-in-out"
              >
                <Link to="apropos" smooth={true} duration={800}>
                  <div className="flex justify-between w-auto">
                      Learn More
                    
                    <svg
                      className="self-center ml-2"
                      width="20"
                      height="12"
                      viewBox="0 0 21 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9424 5.5711L14.8279 0.0998802C14.704 -0.0302057 14.4925 -0.0311413 14.3733 0.084753C14.2521 0.202513 14.2432 0.418693 14.3583 0.542439L18.9634 5.47055L1.16243 5.47055C0.985884 5.47055 0.842773 5.61464 0.842773 5.79239C0.842773 5.97014 0.985884 6.11423 1.16243 6.11423L18.9634 6.11423L14.3583 11.0424C14.2432 11.1661 14.2502 11.3842 14.3733 11.5C14.4962 11.6159 14.694 11.6188 14.8279 11.4849L19.9424 6.01369C20.064 5.86307 20.032 5.67846 19.9424 5.5711Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.button>
            </motion.div>
          </div>
        </main>
      </Container>

      <motion.div

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >

       
       
        
        
        <div className="absolute top-0 w-screen h-full  opacity-70">
        <HeroGallery />
        </div>

      </motion.div>
    </div>
  );
}
