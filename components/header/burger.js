import React from "react";
import { motion } from "framer-motion";

export default function Burger({ open, setOpen }) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, delay: 1.7 } }}
      className={`menu-button md:hidden z-20 relative w-8 + text-black`}
      onClick={setOpen}
    >
      <span
        aria-hidden="true"
        className={` block absolute h-0.5 w-full bg-current transform transition duration-500 ease-in-out ${
          open ? `rotate-45` : `-translate-y-1.5`
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={` block absolute h-0.5 w-full  bg-current transform transition duration-500 ease-in-out  ${
          open ? `opacity-0` : `null`
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={` block absolute h-0.5 w-full bg-current transform transition duration-500 ease-in-out  ${
          open ? `-rotate-45` : `translate-y-1.5`
        }`}
      ></span>
    </motion.button>
  );
}
