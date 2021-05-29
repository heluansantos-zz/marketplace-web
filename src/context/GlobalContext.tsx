import React, { createContext, useCallback, useEffect, useState } from 'react'
import api from '../Data/api'
import { ContextData, ContextProviderProps } from './interfaces'
export const Context = createContext({} as ContextData)
import { useRouter } from 'next/router'

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
    const router = useRouter()

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

    async function signUp({
        first_name,
        cpf,
        email,
        password,
        confirm_password,
    }){
        try{
          const response = await api.post('/user',
          {
          first_name,
          cpf,
          email,
          password,
          confirm_password,
          }
        )
        alert('Conta criada com sucesso. Agora faça login!');
        router.push('/');
        return response;
        }catch(err){
            console.log(err);
          alert('Erro na criação do usuário. ');
        }
      }

      async function updateUser({
        first_name,
        cpf,
        email,
        password,
        confirm_password,
      }){
        try{
          const response = await api.put('/user',
          {
          first_name,
          cpf,
          email,
          password,
          confirm_password,
          }
        )
        alert('Dados do usuário atualizados!');
        return response;
        }catch(err){
            console.log(err);
          alert('Erro na atualização dos dados do usuário. ');
        }
      }

      async function deleteUser(id: number){
        try{
          const response = await api.post('/user',
          {
          name: id,
          }
        )
        alert('Usuário excluido com sucesso!');
        return response;
        }catch(err){
            console.log(err);
          alert('Erro ao deletar usuário. ');
        }
      }

      async function cadCreditCard({
          user_id,
          number_card,
          validate_date,
          verify_number,
          cardholder
      }){
        try{
          const response = await api.put(`/creditCard/`, {
            user_id,
            number_card,
            validate_date,
            verify_number,
            cardholder,
          })
        alert('Card cadastrado com sucesso!');
        return response;
        }catch(err){
            console.log(err);
          alert('Erro ao cadastrar card. ');
        }
      }

      async function cadAddress({
        uf,
        cep,
        address,
        district,
        number,
        city
    }){
      try{
        const response = await api.put(`/address`, {
            uf,
            cep,
            address,
            district,
            number,
            city
        })
      alert('Endereço cadastrado com sucesso!');
      return response;
      }catch(err){
          console.log(err);
        alert('Erro ao cadastrar endereço. ');
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
            signIn,
            signUp,
            deleteUser,
            updateUser,
            cadCreditCard,
            cadAddress,
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider
