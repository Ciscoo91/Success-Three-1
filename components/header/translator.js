import React from 'react'
import {useTranslation} from "react-i18next"

export default function Translator() {

    const {i18n} = useTranslation()

    
    return (
        <div className='w-[100px] md:w-[120px] md:ml-10 flex justify-between text-white bg-palette-blue bg-opacity-30 p-2'>
            <button onClick={() => i18n.changeLanguage('en')} className="flex items-center justify-between "><span className="mr-2">En</span><img alt="breatan's flag for translation feature" src="assets/icons/gb.svg" className='w-[15px]'/></button>
            <button onClick={() => i18n.changeLanguage('fr')} className="flex items-center"><span className="mr-2">Fr</span><img alt="france's flag for translation feature" src="assets/icons/fr.svg" className='w-[15px]' /></button>
        </div>
    )
}
