import { ReactNode } from 'react'

export interface CadastroPjContextProviderProps {
  children: ReactNode
}

export interface CadastroPjContextData {
  darkTheme: boolean;
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  telefone: string;
  email: string;
  rua: string;
  bairro: string;
  numero: string;
  cidade: string;
  estado: number;
  cep: string;
  setRazaoSocial: (value: string) => void;
  setNomeFantasia: (value: string) => void;
  setCnpj: (value: string) => void;
  setTelefone: (value: string) => void;
  setEmail: (value: string) => void;
  setRua: (value: string) => void;
  setBairro: (value: string) => void;
  setNumero: (value: string) => void;
  setCidade: (value: string) => void;
  setEstado: (value: number) => void;
  setCep: (value: string) => void;
  updateTheme: (value: number) => void;
}
