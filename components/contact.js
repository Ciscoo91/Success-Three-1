import React, {forwardRef} from "react";
import Container from "./container";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
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
    title: "Offices",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>,
    adressList: [
      {
        city: "Kinshasa",
        address: "63, Boulevard Tshatshi",
      },
      {
        city: "Matadi",
        address: "Av. KINKANDA n°36",
      },
    ]
  }
];



const testItems = [
  {
    title: "Get in touch",
    subtext: "Quam nunc nunc ses. Sed rhoncus quis ultrices ac pelletesque.",
    subItems: [
      {
        title: "Send an Email",
        text: "sucessthree023@gmail.com"
      },
      {
        title: "Phone",
        text: "+243808430963"
      }
    ]
  },
  {
    title: "Locations",
    subtext: "Consequat sunct cillum cillum elit sint. Qui accaecat nisi ipsum commodo.",
    subItems: [
      {
        title: "Kinshasa/Gombe",
        text: "63, Boulevard Tshatshi",
      },
      {
        title: "Matadi",
        text: "36 Avenue KINKANDA",
      },
      {
        title: "Haut-Katanga/Lubumbashi",
        text: "2C, Lumumba"
      }
    ]
  }
]

export default function Contact() {

  const {t} = useTranslation()
  const lineStyle = "text-2xl sm:text-2xl 2xl:text-3xl";

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  function conditionalSubItem(item, index){
    if(item.title == "Send an Email" || item.title == "Phone"){
      return 
    }
  }

  return (
    <Container extraClasses="rounded-t-[2rem] py-16 md:py-32">
      <div
        className="contact my-12"
        aria-labelledby="footer-heading"
        id="contact"
      >
        <p className="text-palette-blue font-montrealRegular">Contact</p>
        <div className="mt-12 contact-row grid items-center w-full ">
          {/* {items.map(({ title, text, subtext, icon, adressList,link }, i) => ( */}
            <motion.div 
                ref={ref}
                initial={{opacity: 0, y:20}} 
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
                // key={i} 
                className="w-full md:h-100 xsl:w-6/12 text-white grid grid-cols-1 grid-rows-2 gap-y-12 items-center md:items-start rounded-md md:min-h-full"
              >
              {
                testItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:gap-8 w-full md:mb-12">
                    <div className="mb-8">
                      <h4 className={`${lineStyle} font-montrealMedium max-w-[280px] mt-4 md:w-[400px] md:mt-4 text-black mb-4 md:mb-4`}>
                        {t(`contact.content.${index}.title`)}
                      </h4>
                      <p className="text-black">{t(`contact.content.${index}.subtext`)}</p>
                    </div>
                    <div className=" col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.subItems.map((itm, i)=>(
                        <div className=" md:py-4 md:px-10 rounded bg-neutral-100 " key={i}>
                          <h5 className="py-2 pl-2 sm:text-lg md:text-xl font-montrealRegular text-palette-blue md:mb-4">{t(`contact.content.${index}.subItems.${i}.title`)}</h5>
                          {itm.title == "Send an Email" ? <a href={`mailto:${itm.text}`} className="py-2 pl-2 lg:text-xl text-gray-600 block">{t(`contact.content.${index}.subItems.${i}.text`)}</a>
                          : item.title == "Phone" || "Téléphone" ? <a href={`tel:${itm.text}`} className="py-2 pl-2 lg:text-xl text-gray-600 block">{t(`contact.content.${index}.subItems.${i}.text`)}</a> : <p className="py-2 pl-2 lg:text-xl text-gray-600">{t(`contact.content.${index}.subItems.${i}.text`)}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              }
            </motion.div>
          {/* ))} */}
        </div>
      </div>
    </Container>
  );
}