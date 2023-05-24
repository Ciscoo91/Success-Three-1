import React, { forwardRef } from "react";
import Container from "./container";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const lineStyle = "text-2xl sm:text-2xl 2xl:text-3xl";

  const content = [
    <>
      Success Three is a premier service provider specializing in consultancy and operational support. Our expertise extends to both our own operations and those of our valued clients. With a focus on comprehensive services, we excel in various areas, including general trade, investment studies, market agency, business opportunities, and economic, accounting, tax, legal, judicial, and fiduciary consultation. We offer expert management advisory services, bookkeeping, accounting, financial analysis, personnel placement, and administration.
    </>,
    <>
      In addition to our consultancy services, Success Three engages in the purchase and sale of mining products and undertakes construction projects, including road rehabilitation. Our company is committed to delivering exceptional results and ensuring client satisfaction in every endeavor.
    </>,
    <>
      Driven by a passion for excellence, Success Three actively seeks out and explores diverse opportunities that align with our core mission. We are authorized to undertake all financial and commercial activities directly or indirectly related to our primary objective.
    </>,
    <>
      At Success Three, we pride ourselves on providing transformative solutions, personalized attention, and reliable support to help our clients thrive in an ever-evolving business landscape. With our comprehensive range of services and unwavering dedication, we are your trusted partner on the path to success.
    </>,
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
    <Container extraClasses="About-Container">
      <div className="flex flex-col md:grid md:grid-cols-3  py-16  relative md:py-24 lg:py-36 " id="apropos">
        <div>
          <p className="text-palette-red font-montrealRegular">About us</p>
        <motion.h4 variants={listItemVariants} animate={inView ? "visible" : "hidden"} className={`${lineStyle} font-montrealMedium max-w-[280px] mt-4 md:w-[400px] md:mt-4`}>
          Discover the Story of Success Three
        </motion.h4>
        </div>
        <motion.ul
          ref={ref}
          className="mt-12 col-span-2 grid grid-cols-1 gap-y-8 font-thin"
          variants={listVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {content.map((item, index) => (
            <motion.li
              key={index}
              variants={listItemVariants}
              className="text-base sm:text-lg md:text-xl font-montrealRegular"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Container>
  );
}
