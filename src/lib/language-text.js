import { useContext } from 'react'
import StoreContext from '../store'

function LanguageText({ tid }) {
  const store = useContext(StoreContext)
  return store.dictionary[tid] || tid
}

export default LanguageText
