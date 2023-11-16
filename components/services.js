import React, { useState } from "react";
import Container from "./container";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal"
import { useTranslation } from "react-i18next";

function sliceStringByCharacters(string, numCharacters) {
  if (string.length <= numCharacters) {
    return string;
  } else {
    return string.slice(0, numCharacters) + "...";
  }
}


export default function Services() {

  const {t} = useTranslation()

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const lineStyle = "text-2xl sm:text-2xl 2xl:text-3xl";

  const content = [
        {   
            "title": "Consultancy and Advisory Services",
            "text": "Success Three provides expert guidance and operational assistance in various areas, including economic, accounting, tax, legal, judicial, and fiduciary matters. Clients can rely on our experienced consultants for strategic advice, management consultancy, and comprehensive solutions tailored to their specific needs.",
            "imageUrl": "images/consultance_sct.jpg"
        },
        {
            "title": "Construction and Road Rehabilitation",
            "text": "Success Three undertakes construction projects, including the rehabilitation of roads. With expertise in the construction industry, we provide efficient project management, quality control, and timely completion of construction projects.",
            "imageUrl": "images/road_construction.jpg"
        },
        {
            "title": "Personnel Placement and Management",
            "text": "Success Three specializes in personnel placement and management solutions. We help businesses identify and recruit talented professionals suitable for their specific requirements. Our services include candidate sourcing, screening, and placement to ensure the right fit for long-term success.",
            "imageUrl": "images/placement_perso_sct.jpg"
        },
        {
            "title": "Financial Analysis & Investment Studies",
            "text": "Success Three offers in-depth financial analysis and investment studies to assist clients in making informed decisions. Our team analyzes market trends, evaluates investment opportunities, and provides comprehensive reports to support clients in maximizing their financial potential.",
            "imageUrl": "images/analyse_financiere.png"
        },
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

  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState("")

  function openModalAndSetCurrentContent(item, index) {
    setIsOpen(true);
    setCurrentContent({item,index})
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container extraClasses="About-Container">
      <div className="flex flex-col items-center py-28 relative lg:py-36" id="services">
        <div className="mb-6 w-full flex flex-col">
            <p className="text-palette-blue font-montrealRegular self-start">Services</p>
            <motion.h4 variants={listItemVariants} className={`${lineStyle} font-montrealMedium  mt-4  md:mt-4 md:text-center`}>
            {t('services.title')}
            </motion.h4>
        </div>
        <motion.ul
          ref={ref}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 h-fit  gap-20 font-thin md:w-3/4"
          variants={listVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {content.map((item, index) => (
            <motion.li
              key={index}
              variants={listItemVariants}
              className="text-base sm:text-lg md:text-xl font-montrealRegular"
              onClick={() => {
                openModalAndSetCurrentContent(item, index)
              }}
            >
              <div className="max-w-md rounded mr-0 overflow-hidden shadow-sm hover:cursor-pointer hover:bg-blue-100">
                <img className="w-full" src={item.imageUrl} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{t(`services.content.${index}.title`)}</div>
                  <p className="text-gray-700 text-base">
                    {/* {sliceStringByCharacters(item.text, 100)} */}
                    {t(`services.content.${index}.extract`)}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={`w-3/4`}
      >
          <motion.div 
          className="fixed inset-0 z-30 overflow-y-auto md:w-full"
          initial={{y:-100, opacity: 0}}
          animate={{y:0, opacity: 1}}
          exit={{y: 300, opacity: 0}}
          transition={{ease: "easeOut", duration: 0.5}}
        >
          <div ref={(_subtitle) => (subtitle = _subtitle)} className="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0" onClick={closeModal}>
            
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg  mt-8">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <img className="w-full" src={currentContent.item?.imageUrl} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                  <div className="font-bold text-palette-blue text-xl mb-2">{t(`services.content.${currentContent.index}.title`)}</div>
                  <p className="text-gray-700 text-base">
                    {t(`services.content.${currentContent.index}.text`)}
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </motion.div>
      </Modal>
    </Container>
  );
}
