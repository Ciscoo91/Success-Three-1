import { useRef } from "react";
import Layout from "../components/layout";
import Header from "../components/header/header";
import Hero from "../components/hero";
import Services from "../components/services";
import About from '../components/about'
import Contact from "../components/contact";
import Footer from "../components/footer";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import React from "react";
import Carousel from "@/components/carousel";
import CarouselText from "@/components/carouselText";

export default function Home(){

  const aboutRef = useRef(null)
  const clientsRef = useRef(null)
  const contactRef = useRef(null)
  const servicesRef = useRef(null)

  const sectionsRefs = [aboutRef, servicesRef, clientsRef, contactRef]

  return (
    <Layout>
      <NextSeo title="Home" />
      <LazyMotion features={domAnimation}>
        <m.div initial="initial" animate="enter" exit="exit">
        <Header />
          <Hero />
          <About />
          <Services />
          <CarouselText />
          <Carousel />
          <Contact />
          <Footer/>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
