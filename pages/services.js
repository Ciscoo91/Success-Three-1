import Layout from '@/components/layout'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Contact from '@/components/contact'
import Services from '@/components/services'
import Stats from '@/components/stats'

export default function ServicesPage() {
  return (
    <Layout>
      <NextSeo title="Services" />
      <LazyMotion features={domAnimation}>
        <Services />
        <Stats />
        <Contact />
      </LazyMotion>
     
    </Layout>
  )
}
