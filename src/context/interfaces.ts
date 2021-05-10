import { ReactNode } from 'react'

export interface ContextProviderProps {
  children: ReactNode
}

export interface ContextData {
  darkTheme: boolean
  email: string;
  senha: string;
  nomepf: string;
  emailpf: string
  senhapf: string
  cpf: string;
  dataNasc: string;
  passo: number;
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  telefone: string;
  emailpj: string;
  rua: string;
  bairro: string;
  numero: string;
  cidade: string;
  estado: number;
  cep: string;
  nomePj: string;
  cpfPJ: string;
  bancoPj: string;
  tipoConta: string;
  agencia: string;
  digitoAgencia: string;
  numeroConta: string;
  digitoConta: string;
  setEmail: (value: string) => void;
  setSenha: (value: string) => void;
  setNomePf: (value: string) => void;
  setEmailPf: (value: string) => void;
  setCpf: (value: string) => void;
  setDataNasc: (value: string) => void;
  setSenhaPf: (value: string) => void;
  setRazaoSocial: (value: string) => void;
  setNomeFantasia: (value: string) => void;
  setCnpj: (value: string) => void;
  setTelefone: (value: string) => void;
  setEmailpj: (value: string) => void;
  setRua: (value: string) => void;
  setBairro: (value: string) => void;
  setNumero: (value: string) => void;
  setCidade: (value: string) => void;
  setEstado: (value: number) => void;
  setCep: (value: string) => void;
  setNomePj: (value: string) => void;
  setCpfPj: (value: string) => void;
  setBancoPj: (value: string) => void;
  setTipoConta: (value: string) => void;
  setAgencia: (value: string) => void;
  setDigitoAgencia: (value: string) => void;
  setNumeroConta: (value: string) => void;
  setDigitoConta: (value: string) => void;
  updateTheme: (value: number) => void;
  defineStep: (value: number) => void;
  prevStep: any;
  
}
