import React, { useContext } from 'react'
import Head from 'next/head'
import { Container } from './styles'
import { HomeContext } from '../../context/Home/HomeContext'

const Home: React.FC = () => {
  const { darkTheme } = useContext(HomeContext)
  return (
    <Container>
      <Head>
        <title>HomePage</title>
      </Head>
      <h1>Home</h1>
      <p>A ReactJS + Next.js structure made by Hevolsoft.</p>
    </Container>
  )
}

export default Home