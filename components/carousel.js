import React, { useState, useEffect, useRef } from "react";
import Container from "./container";
import { motion, AnimatePresence } from "framer-motion";
import images from "@/helpers/images";
import { useInView } from "react-intersection-observer";

export default function Carousel() {
  const [ref, inView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const fullscreenRef = useRef();
  const totalImages = images.length;

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [selectedImage]);

  const handlePreviousImage = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage < totalImages - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const elementRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      const element = elementRef.current;

      element.scrollLeft -= event.deltaY;
      event.preventDefault();
    };

    const handleScroll = (event) => {
      event.preventDefault();
    };

    const element = elementRef.current;

    element.addEventListener("wheel", handleWheel);
    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("wheel", handleWheel);
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container extraClasses=" mb-12 md:mb-28 relative  h-[50vh] flex flex-col justify-center">
      <motion.div
        className="carousel overflow-x-scroll  relative scrollbar-hide "
        ref={elementRef}
      >
        <motion.ul
          ref={ref}
          transition={{ duration: 0.5, staggerChildren: .2 }}
          className="inner-carousel flex  snap-x snap-start snap-always"
        >
          {images.map((image, index) => {
            return (
              <motion.li
                key={index}
                className={`snap-start snap-always relative item min-h-[20rem] h-[25rem] min-w-[100%] sm:min-w-[60%] md:min-w-[33%] p-4 transition duration-100 ease-in-out  hover:drop-shadow-xl `}
                onClick={() => setSelectedImage(index)}
                transition={{ 
                  duration: 0.5,
                
                }}
              >
                <motion.div
                  className="h-full w-full absolute top-0 left-0 bg-white"
                  style={{ scaleX: 0, originX: "right" }}
                  initial={{ scaleX: 1 }}
                  animate={inView ? { scaleX: 0 } : {scaleX:1}}
                  exit={{ scaleX: 1 }}
                  transition={{duration: 0.5, ease: "easeInOut", delay: `${index/2}` }}
                />
                <motion.img
                  key={`image-${index}`}
                  src={image.src}
                  alt="image"
                  className="h-full w-full object-cover rounded-xl cursor-pointer"
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
      <AnimatePresence transition={{ type: "crossfade", duration: 1.2 }}>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0  flex justify-center items-center z-[50]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
            key={selectedImage}
          >
            <motion.div
              ref={fullscreenRef}
              className="absolute inset-0 bg-black opacity-85 cursor-pointer"
              onClick={() => setSelectedImage(null)}
            />

            <motion.div className="flex flex-col relative">
              <motion.div
                className="relative rounded-xl overflow-hidden pb-[66.66%] w-[90vw] h-[355px] sm:max-w-[60vw] "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src={images[selectedImage]?.src}
                  alt="selected image"
                  className="rounded-xl absolute h-full w-full object-contain "
                />
              </motion.div>
              <motion.div className="arrow-buttons flex w-[50%] justify-evenly mx-auto mt-4">
                <motion.button
                  style={{ display: selectedImage > 0 ? "block" : "none" }}
                  onClick={handlePreviousImage}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                      fill="none"
                    />
                  </svg>
                </motion.button>
                <motion.button
                  style={{
                    display: selectedImage < totalImages - 1 ? "block" : "none",
                  }}
                  onClick={handleNextImage}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}
