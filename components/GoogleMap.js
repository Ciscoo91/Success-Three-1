import {useState, useCallback} from "react";
import Container from "./container";
import { motion, m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sectionImage from "../public/images/vision-image.jpg";
import { useTranslation } from "react-i18next";
import { useJsApiLoader, useLoadScript} from "@react-google-maps/api"
import Map from "./Map"



export default function MyGoogleMap() {

    const [center, setCenter] = useState({
        lat: -4.308460,
        lng: 15.275430
    })

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyC5ZIyU3laLcteFXSaCCnf7R9X32iY2FCI"
    })

//     const [map, setMap] = useState(null)

//     const onLoad = useCallback(function callback(map) {
//         const google = window.google
//         // This is just an example of getting and using the map instance!!! don't just blindly copy!
//         const bounds = new google.maps.LatLngBounds(center);
//         map.fitBounds(bounds);

//         setMap(map)
//     }, [])

//     const onUnmount = useCallback(function callback(map) {
//     setMap(null)
//  }, [])

  const {t} = useTranslation()

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const lineStyle =
    " carousel-textLine font-montrealRegular line  sm:text-xl  md:text-2xl";

  return (
    <div ref={ref} className="relative h-[40vh] overflow-hidden flex flex-col justify-center mb-12 w-full">
      <Container extraClasses="relative bg-palette-blue rounded-b-[2rem] h-full">
        <main >
          <div className=" w-12/12 relative">
            <motion.div>
              { isLoaded ? (<Map center={center}></Map>) : <></>}
            </motion.div>
          </div>
        </main>
      </Container>

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? {
          opacity: 1, transition: {
            duration: 0.8,
            ease: "easeInOut",
          }
        } : {}}


        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <img
          style={{ minWidth: "100%", height: "100%" }}
          src={sectionImage.src}
          alt="bg"
        />
        <div className="absolute top-0 w-screen h-screen bg-palette-blue opacity-70" />
      </motion.div> */}
    </div>
  );
}
