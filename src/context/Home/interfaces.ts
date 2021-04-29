import { ReactNode } from 'react'

export interface HomeContextProviderProps {
  children: ReactNode
}

export interface HomeContextData {
  darkTheme: boolean
  email: string
  senha: string
  setEmail: (value: string) => void;
  setSenha: (value: string) => void;
  updateTheme: (value: number) => void
}
