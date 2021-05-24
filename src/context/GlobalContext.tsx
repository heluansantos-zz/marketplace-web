import React, { createContext, useCallback, useEffect, useState } from 'react'
import api from '../Data/api'
import { ContextData, ContextProviderProps } from './interfaces'
export const Context = createContext({} as ContextData)

const ContextProvider = ({ children }: ContextProviderProps) => {
    const [darkTheme] = useState(false)
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [passo, setPasso] = useState(1);

    //Pessoa Física -------------------------------------
    const [nomepf, setNomePf] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [emailpf, setEmailPf] = useState("");
    const [senhapf, setSenhaPf] = useState("");

    //Pessoa Jurídica-------------------------------------
    //passo1
    const [razaoSocial, setRazaoSocial] = useState("");
    const [nomeFantasia, setNomeFantasia] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [telefone, setTelefone] = useState("");
    const [emailpj, setEmailpj] = useState("");
    //passo2
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState(-1);
    const [cep, setCep] = useState("");
    //passo3
    const [nomePj, setNomePj] = useState("");
    const [cpfPJ, setCpfPj] = useState("");
    const [bancoPj, setBancoPj] = useState("");
    const [tipoConta, setTipoConta] = useState("");
    const [agencia, setAgencia] = useState("");
    const [digitoAgencia, setDigitoAgencia] = useState("");
    const [numeroConta, setNumeroConta] = useState("");
    const [digitoConta, setDigitoConta] = useState("");

    const defineStep = (e: number) => {
        setPasso(e);
    }

    const prevStep = () => {
        if (passo > 1) {
            var p = passo - 1;
            setPasso(p);
        }
    }

    const signIn = useCallback(async() => {
        console.log('Function Login')
        // const response = await api.post();
        // 
    }, [])

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
            nomePj,
            cpfPJ,
            bancoPj,
            tipoConta,
            agencia,
            digitoAgencia,
            numeroConta,
            digitoConta,
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
            setNomePj,
            setCpfPj,
            setBancoPj,
            setTipoConta,
            setAgencia,
            setDigitoAgencia,
            setNumeroConta,
            setDigitoConta,
            prevStep,
            signIn
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider
