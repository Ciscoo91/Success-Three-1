import React, {forwardRef} from "react";
import Container from "./container";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const items = [
  {
    title: "Email",
    icon : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>,
    link:"hello@gmail.com"
  },
  {
    title: "Phone",
    icon: <img src="assets/icons/telephone_icon.svg" alt="" className="w-8"/>,
    subtext: "+243 XX XX XXX XX"
  },
  {
    title: "Office",
    text: "63, Boulevard Tshatshi, Kinshasa/Gombe",
    subtext: "Av. KINKANDA n°36, C/Matadi",
    icon : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
  }
];

export default function Contact() {

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <Container extraClasses="rounded-t-[2rem] py-16 md:py-32">
      <div
        className="contact my-12"
        aria-labelledby="footer-heading"
        id="contact"
      >
         <p className="text-palette-red font-montrealRegular">Contact</p>
        <div className="mt-12 contact-row grid grid-cols-1 row-span-2 gap-20 md:grid-cols-3  col-span-2   sm:gap-y-14 w-full">
          {items.map(({ title, text, subtext, icon,link }, i) => (
            <motion.div 
                ref={ref}
                initial={{opacity: 0, y:20}} 
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
                key={i} 
                className="w-full xsl:w-6/12 text-white flex flex-col "
              >
                {icon}
              {title && <h4 className="text-2xl font-montrealMedium mt-4 mb-3 text-black">
                {title}
              </h4>}
              {text && <p className="font-montrealRegular mt-1 text-black  xl:text-md ">{text}</p>}
              {subtext && <p className="font-montrealRegular text-black xl:text-md  ">{subtext}</p>}
              {link && <a href={link} className="font-montrealRegular text-black xl:text-md underline ">{link}</a>}
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}