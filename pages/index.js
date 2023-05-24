import Layout from '@/components/layout'
import Header from '@/components/header/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Hero from '@/components/hero'
import About from '@/components/about'
import Content from '@/components/content'
import Contact from '@/components/contact'
import Services from '@/components/services'
import ContentWithCTA from '@/components/contentWithCTA'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />
      <LazyMotion features={domAnimation}>
        <Hero/>
        <About/>
        <Content/>
        <Services/>
        <ContentWithCTA/>
        <Contact/>
      </LazyMotion>
     
    </Layout>
  )
}
