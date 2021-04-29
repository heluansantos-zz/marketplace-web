import { ReactNode } from 'react'

export interface CadastroContextProviderProps {
  children: ReactNode
}

export interface CadastroContextData {
  darkTheme: boolean;
  nome: string;
  cpf: string;
  dataNasc: string;
  email: string;
  senha: string;
  setNome: (value: string) => void;
  setCpf: (value: string) => void;
  setDataNasc: (value: string) => void;
  setEmail: (value: string) => void;
  setSenha: (value: string) => void;
  updateTheme: (value: number) => void;
}
