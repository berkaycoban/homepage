import { createContext, useEffect, useState } from 'react'
import { dictionaryList } from 'languages'

const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState('tr')

  const userLanguageChange = (language) => {
    setUserLanguage(language)
    localStorage.setItem('LANG', language)
  }

  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem('LANG') || 'tr'
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
