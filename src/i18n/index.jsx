import { createContext, useContext, useState } from 'react'
import en from './en'
import id from './id'

const translations = { en, id }

export const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧', image: 'https://ik.imagekit.io/nepgaxllc/Untitledxxxx-removebg-preview.png?updatedAt=1777592742536' },
  { code: 'id', label: 'Bahasa', flag: '🇮🇩', image: 'https://ik.imagekit.io/nepgaxllc/Untitledxxxxcc-removebg-preview.png?updatedAt=1777592820803' },
]

const LangContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('indoo_lang') || 'en')

  const setLanguage = (code) => {
    setLang(code)
    localStorage.setItem('indoo_lang', code)
  }

  const t = (key) => translations[lang]?.[key] || translations.en[key] || key

  return (
    <LangContext.Provider value={{ lang, setLang: setLanguage, t, LANGUAGES }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LangContext)
}
