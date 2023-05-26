import React, { forwardRef } from "react";
import Container from "./container";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const lineStyle = "text-2xl sm:text-2xl 2xl:text-3xl";

  const content = [
        {   
            "title": "Consultancy and Advisory Services",
            "text": "Success Three provides expert guidance and operational assistance in various areas, including economic, accounting, tax, legal, judicial, and fiduciary matters. Clients can rely on our experienced consultants for strategic advice, management consultancy, and comprehensive solutions tailored to their specific needs.",
            "imageUrl": "assets/icons/conference_meeting_discussion_presentation_strategy_icon.svg"
        },
        {
            "title": "Financial Analysis and Investment Studies",
            "text": "Success Three offers in-depth financial analysis and investment studies to assist clients in making informed decisions. Our team analyzes market trends, evaluates investment opportunities, and provides comprehensive reports to support clients in maximizing their financial potential.",
            "imageUrl": "assets/icons/consultation_profit_garph_success_graph_icon.svg"
        },
        {
            "title": "Personnel Placement and Management",
            "text": "Success Three specializes in personnel placement and management solutions. We help businesses identify and recruit talented professionals suitable for their specific requirements. Our services include candidate sourcing, screening, and placement to ensure the right fit for long-term success.",
            "imageUrl": "assets/icons/consultation_money_income_profit_budget_icon.svg"
        },
        {
            "title": "Construction and Road Rehabilitation",
            "text": "Success Three undertakes construction projects, including the rehabilitation of roads. With expertise in the construction industry, we provide efficient project management, quality control, and timely completion of construction projects.",
            "imageUrl": "assets/icons/architecture_building_business_construction_crane_icon.svg"
        }
    ]

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
      <div className="flex flex-col md:grid md:grid-cols-3  py-16  relative md:py-24 lg:py-36 " id="services">
        <div className="">
            <p className="text-palette-blue font-montrealRegular">Services</p>
            <motion.h4 variants={listItemVariants} className={`${lineStyle} font-montrealMedium max-w-[280px] mt-4 md:w-[400px] md:mt-4`}>
            Empowering Success Through Expertise
            </motion.h4>
        </div>
        <motion.ul
          ref={ref}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-10 font-thin"
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
              <div className="">
                <img className="w-9 h-11 mb-8" src={item.imageUrl} alt={`${item.title} icon`} />
                <span className="font-semibold text-xl">{item.title}</span>
                <p className="mt-8">{item.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Container>
  );
}
