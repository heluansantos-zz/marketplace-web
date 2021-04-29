import React, { useContext } from 'react'
import Head from 'next/head'
import { Container } from './styles'
import { HomeContext } from '../../context/HomeContext'

const Login: React.FC = () => {
  const { darkTheme } = useContext(HomeContext)
  return (
    <Container>
      <Head>
        <title>LoginPage</title>
      </Head>
      <h1>Loginß</h1>
      <p>A ReactJS + Next.js structure made by Hevolsoft.</p>
    </Container>
  )
}

export default Login