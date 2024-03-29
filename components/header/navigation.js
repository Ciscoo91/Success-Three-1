import React, { useState } from "react";
import { motion } from "framer-motion";
// import { Link } from "react-scroll"
import Link from "next/link"
import {useTranslation} from "react-i18next"

import Translator from "./translator";

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};



export default function Navigation({ items, setOpen }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const {t} = useTranslation()

  return (
    <motion.nav className="hidden md:flex justify-end items-center  w-full  md:w-auto">
      <motion.ul
        initial={{opacity:0}}
        animate={{opacity:1,transition:{duration:.4,delay:1.7}}}
        onHoverEnd={() => setActiveIndex(null)}
        className="flex space-x-3 font-montrealRegular text-black text-lg"
      >
        {items.map(({ route, url }, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.li
              key={index}
              onHoverStart={() => setActiveIndex(index)}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              onClick={setOpen}
            >
              <Link href={url} smooth={true} duration={800} offset={-100}>
                <span className="relative text-palette-blue focus:text-gray-500 text-base hover:cursor-pointer">
                  {isActive && (
                    <motion.span
                      layoutId="shadow"
                      className="shadow"
                      initial={{ opacity: 0}}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        duration: 0.5,
                      }}
                    />
                  )}
                  <span className="text-xl group">{t(`nav.${index}.route`)}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-palette-blue"></span>
                  </span>
                  
                </span>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
      <Translator/>
    </motion.nav>
  );
}
