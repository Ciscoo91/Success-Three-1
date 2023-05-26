import React from "react";
import { slideInLeft, stagger } from "../../helpers/transitions";
import { motion } from "framer-motion";
import {Link} from "react-scroll"



export default function Menu({ open, items, setOpen }) {
  const asideVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.79, 0.14, 0.15, 0.86],
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.9,
        ease: [0.79, 0.14, 0.15, 0.86],
        when: "afterChildren",
      },
    },
  };
  return (
    <motion.aside
      variants={asideVariants}
      initial="closed"
      animate={open && "open"}
      exit="closed"
      className="bg-palette-white  text-black fixed left-0 top-0 w-full h-screen font-montrealRegular px-10 md:hidden pt-20">
      <motion.ul
        variants={stagger}
        className="flex flex-col justify-center h-5/6 overflow-hidden ">
        {items && items.map(({ route, url }, index) => {
          return (
            <motion.li
              key={index}
              variants={slideInLeft}
              className="group menu-overlay-item text-palette-blue text-6xl  md:text-7xl pt-10 duration-100 ease-in-out"  >
              <Link to={url} smooth={true} duration={800} delay={1000} offset={-50} onClick={setOpen}>
              {route}
              </Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-palette-blue"></span>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.aside>
  );
}
