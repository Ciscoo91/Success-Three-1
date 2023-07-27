import React from "react";
import Container from "./container";
import {useTranslation} from "react-i18next"

export default function Footer() {

  const {i18n} = useTranslation()

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
            </div>
            <div className="ml-12 flex justify-between w-[50px]">
              <button onClick={() => i18n.changeLanguage('en')} className="">En 🇬🇧</button>
              <button onClick={() => i18n.changeLanguage('fr')} className="">FR 🇫🇷</button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
