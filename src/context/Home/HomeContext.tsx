import React, { createContext, useEffect, useState } from 'react'
import { HomeContextData, HomeContextProviderProps } from './interfaces'
export const HomeContext = createContext({} as HomeContextData)

const HomeContextProvider = ({ children }: HomeContextProviderProps) => {
  const [darkTheme] = useState(false)
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    console.log('')
  }, [])
  const updateTheme = (index: number) => {
    console.log(darkTheme)
  }

  return (
    <HomeContext.Provider value={{
      darkTheme,
      updateTheme,
      email,
      senha,
      setEmail,
      setSenha
    }}>
      {children}
    </HomeContext.Provider>
  )
}

export default HomeContextProvider
