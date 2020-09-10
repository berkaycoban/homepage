import React, { createContext } from 'react'

const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  return <StoreContext.Provider>{children}</StoreContext.Provider>
}

export default StoreContext
