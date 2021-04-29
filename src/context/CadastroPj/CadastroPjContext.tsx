import React, { createContext, useEffect, useState } from 'react'
import { CadastroPjContextData, CadastroPjContextProviderProps } from './interfaces'
export const CadastroPjContext = createContext({} as CadastroPjContextData)

const CadastroPjContextProvider = ({ children }: CadastroPjContextProviderProps) => {
  const [darkTheme] = useState(false)
  const [razaoSocial, setRazaoSocial] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState(-1);
  const [cep, setCep] = useState("");
  useEffect(() => {
    console.log('')
  }, [])
  const updateTheme = (index: number) => {
    console.log(darkTheme)
  }

  return (
    <CadastroPjContext.Provider value={{
      darkTheme,
      razaoSocial,
      nomeFantasia,
      cnpj,
      telefone,
      email,
      rua,
      bairro,
      numero,
      cidade,
      estado,
      cep,
      updateTheme,
      setRazaoSocial,
      setNomeFantasia,
      setCnpj,
      setTelefone,
      setEmail,
      setRua,
      setBairro,
      setNumero,
      setCidade,
      setEstado,
      setCep
    }}>
      {children}
    </CadastroPjContext.Provider>
  )
}

export default CadastroPjContextProvider
