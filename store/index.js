import { createContext, useEffect, useState } from 'react'
import { dictionaryList } from 'languages'

const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState('en')

  const userLanguageChange = (language) => {
    setUserLanguage(language)
    localStorage.setItem('LANG', language)
  }

  useEffect(() => {
    let browserLang = navigator.language || navigator.userLanguage
    const lang = browserLang.split('-')

    let defaultLanguage =
      localStorage.getItem('LANG') ||
      (lang[0] == 'tr' || lang[0] == 'en' ? lang[0] : 'en')
    userLanguageChange(defaultLanguage)
  }, [userLanguageChange])

  const storeProviderValues = {
    userLanguage,
    userLanguageChange,
    dictionary: dictionaryList[userLanguage]
  }

  return (
    <StoreContext.Provider value={storeProviderValues}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContext
