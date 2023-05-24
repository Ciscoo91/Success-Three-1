import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"



const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};



export default function Navigation({ items, setOpen }) {
  const [activeIndex, setActiveIndex] = useState(null);

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
              <Link to={url} smooth={true} duration={800} offset={-100}>
                <span className="relative hover:text-palette-red focus:text-gray-500 text-base hover:cursor-pointer">
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
                  <span>{route}</span>
                </span>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
}
