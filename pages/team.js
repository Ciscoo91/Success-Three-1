import Layout from '@/components/layout'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Contact from '@/components/contact'
import TeamPortrait from "@/components/TeamPortrait"

export default function Team() {
  return (
    <Layout>
      <NextSeo title="Team" />
      <LazyMotion features={domAnimation}>
        <TeamPortrait/>
        <Contact />
      </LazyMotion>
     
    </Layout>
  )
}
