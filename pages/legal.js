import Layout from '@/components/layout'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'



export default function LegalNotice() {

    const legal = [
    {
        title: "Authorization number of economic opening",
        text: "Our company, SUCESS THREE SARL (ST S.A.R.L), is authorized to carry out economic activities in accordance with the current legislation. We have a business license number that certifies our compliance with the regulations on trade and provision of services."
    },
    {
        title: "National identification number",
        text: "We are registered with the relevant authorities and have a national identification number, which allows us to operate legally and transparently."
    },
    {
        title: "Tax number",
        text: "We are subject to the applicable taxes in our country and are registered with the relevant tax authorities. We have a tax number that identifies us as a taxpayer."
    },
    {
        title: "RCCM number:",
        text: "Our company is registered with the Registre du Commerce et du Crédit Mobilier (RCCM). The RCCM number assigned to our company confirms our official registration and attests to our legal existence as a business entity."
    },
    {
        title: "Registered office",
        text: "Our registered office is the official address of our company, where we are legally established. This is where we receive official mail and administrative communications. Our registered office is the place of reference for all correspondence and contacts with our company."
    },
    {
        title: "Certificate of registration at INPP",
        text: "We have obtained a certificate of registration with the National Institute of Professional Providence (INPP), which demonstrates our commitment to comply with social obligations and regulations on social security."
    },
    {
        title: "Certificate of registration with the ONEM",
        text: "We are registered with the National Employment Office (ONEM) and have obtained a registration certification, which demonstrates our compliance with regulations related to employment and worker protection."
    },
    {
        title: "Certificate of affiliation with CNSS",
        text: "We are affiliated with the National Social Security Fund (CNSS) and we have a certificate of affiliation. This demonstrates our commitment to respect the social obligations towards our employees and to contribute to the social security system.",
        subtext: "In addition to the legal disclosures, our company has a history that we will soon make available to you, as well as information about our performance, achievements and partnerships. We are proud to share these elements with our customers and partners, in order to strengthen trust and transparency in our business relationships."
    },
    {
        title: "In short, all legal requirements",
        text: "We are committed to complying with all legal notices applicable to our company and our activities. This includes authorizations, registrations, certifications and other official documents that are necessary to carry out our activities in compliance with the law."
    },
    {
        title: "About the name:",
        text: "Our company is officially named SUCESS THREE SARL. The acronym ST S.A.R.L is used to represent our name in a shortened way. These names are registered and are part of our corporate identity."
    }
]

  return (
    <Layout>
      <NextSeo title="Legal notice" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <Container extraClasses="">
            <m.div variants={fade} className='flex flex-col items-center'>
              <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl pt-40 mb-20">Legal Notice</h1>
              <div className="content max-w-3xl mb-4">
                {legal.map(({title, text, subtext}, i) => (
                    <div className="" key={i}>
                        <h3 className='text-dark text-2xl'>{title}</h3>
                        <p className="text-dark">{text}</p>
                        {subtext && <p className="text-dark">{subtext}</p>}
                    </div>
                ))}
              </div>
              
              <FancyLink destination="/" a11yText="Navigate to the home page" label="Home Page" />
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
