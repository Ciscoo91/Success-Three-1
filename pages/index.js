import Layout from '@/components/layout'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Hero from '@/components/hero'
import About from '@/components/about'
import Content from '@/components/content'
import Contact from '@/components/contact'
import MyGoogleMap from '@/components/GoogleMap'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />
      <LazyMotion features={domAnimation}>
        <Hero/>
        <About/>
        <Content/>
        <Contact/>
        <MyGoogleMap/>
      </LazyMotion>
    </Layout>
  )
}
