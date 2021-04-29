import React, { createContext, useEffect, useState } from 'react'
import { CadastroContextData, CadastroContextProviderProps } from './interfaces'
export const CadastroContext = createContext({} as CadastroContextData)

const CadastroContextProvider = ({ children }: CadastroContextProviderProps) => {
  const [darkTheme] = useState(false)
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    console.log('')
  }, [setNome])
  
  const updateTheme = (index: number) => {
    console.log(darkTheme)
  }

  return (
    <CadastroContext.Provider value={{
      darkTheme,
      updateTheme,
      nome,
      cpf,
      dataNasc,
      email,
      senha,
      setNome,
      setCpf,
      setDataNasc,
      setEmail,
      setSenha
    }}>
      {children}
    </CadastroContext.Provider>
  )
}

export default CadastroContextProvider
