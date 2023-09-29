import React from "react";
import Container from "./container";
import {useTranslation} from "react-i18next"
import Link from "next/link"

export default function Footer() {

  const {t, i18n} = useTranslation()

  return (
    <footer className=" bg-palette-white text-black">
      <Container>
        <div className=" border-t border-balck py-4">
          <div className="flex flex-wrap justify-between text-[10px]">
            <div className="flex space-x-1 mb-1 md:mb-0">
              <a
                href="https://www.350lab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:text-gray-500 focus:text-gray-500"
              >
                Maintained by 350lab Studio
              </a>
              <Link href="/legal" className="no-underline hover:text-gray-500 focus:text-gray-500">{t('footer.links.0.route')}</Link>
            </div>
            <div className="ml-12 flex justify-between w-[60px]">
              <button onClick={() => i18n.changeLanguage('en')} className="flex items-center justify-between mr-4"><span className="mr-2">En</span><img alt="breatan's flag for translation feature" src="assets/icons/gb.svg" className='w-[10px]'/></button>
            <button onClick={() => i18n.changeLanguage('fr')} className="flex items-center"><span className="mr-2">Fr</span><img alt="france's flag for translation feature" src="assets/icons/fr.svg" className='w-[10px]' /></button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
