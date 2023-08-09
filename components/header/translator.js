import React from 'react'
import {useTranslation} from "react-i18next"

export default function Translator() {

    const {i18n} = useTranslation()

    
    return (
        <div className='w-[100px] md:w-[120px] md:ml-10 flex justify-between text-white bg-palette-blue bg-opacity-30 p-2'>
            <button onClick={() => i18n.changeLanguage('en')} className="">En 🇬🇧</button>
            <button onClick={() => i18n.changeLanguage('fr')} className="">Fr 🇫🇷</button>
        </div>
    )
}
