import React, { createContext, useEffect, useState } from 'react'
import { ContextData, ContextProviderProps } from './interfaces'
export const Context = createContext({} as ContextData)

const ContextProvider = ({ children }: ContextProviderProps) => {
    const [darkTheme] = useState(false)
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [passo, setPasso] = useState(1);

    //Pessoa Física
    const [nomepf, setNomePf] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [emailpf, setEmailPf] = useState("");
    const [senhapf, setSenhaPf] = useState("");

    //Pessoa Jurídica
    const [razaoSocial, setRazaoSocial] = useState("");
    const [nomeFantasia, setNomeFantasia] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [telefone, setTelefone] = useState("");
    const [emailpj, setEmailpj] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState(-1);
    const [cep, setCep] = useState("");

    const defineStep = (e: number) => {
        setPasso(e);
    }
    const prevStep = () => {
        if (passo > 1) {
            var p = passo-1;
            setPasso(p);
        }
    }

    useEffect(() => {
        console.log('')
    }, [])
    const updateTheme = (index: number) => {
        console.log(darkTheme)
    }

    return (
        <Context.Provider value={{
            darkTheme,
            updateTheme,
            nomepf,
            emailpf,
            senhapf,
            cpf,
            dataNasc,
            email,
            senha,
            passo,
            razaoSocial,
            nomeFantasia,
            cnpj,
            telefone,
            emailpj,
            rua,
            bairro,
            numero,
            cidade,
            estado,
            cep,
            setEmail,
            setSenha,
            setNomePf,
            setEmailPf,
            setCpf,
            setDataNasc,
            setSenhaPf,
            defineStep,
            setRazaoSocial,
            setNomeFantasia,
            setCnpj,
            setTelefone,
            setEmailpj,
            setRua,
            setBairro,
            setNumero,
            setCidade,
            setEstado,
            setCep,
            prevStep
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider
