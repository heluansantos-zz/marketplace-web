import React, { useContext } from 'react';
import Head from 'next/head';
import LogoImg from '../images/logo.png';
import { BsChevronLeft } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import { useRouter } from 'next/router'
import {
  Container,
  RetangleLeft,
  Section,
  Content,
  Form,
  Info,
  Info2,
  Logo,
  TopForm,
  Back,
  Wellcome,
  H1,
  H5,
  Date,
  Item,
  Title,
  Input,
  Entrar,
  CadastreSe
} from '../styles/pages/Login';
import { Context } from '../context/GlobalContext';


const Home: React.FC = () => {
  const router = useRouter()
  const {
    darkTheme,
    email,
    senha,
    setEmail,
    setSenha
  } = useContext(Context)
  return (
    <Container>
      <Head>
        <title>Mark Place</title>
      </Head>
      <RetangleLeft>
        <Logo src={LogoImg} />
      </RetangleLeft>
      <Section>
        <Content>
          <Form>
            <TopForm>
              <Back onClick={() => router.push('/')} >
                <BsChevronLeft /> <p> Voltar</p>
              </Back>
              <Info2 href="/"><BiHelpCircle /> Preciso de ajuda</Info2>
            </TopForm>
            <Wellcome>
              <H1>Bem Vindo</H1>
              <H5>Faça login para ter acesso à plataforma</H5>
            </Wellcome>
            <Date>
              <Item>
                <Title>Email</Title>
                <Input placeholder="Digite seu email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Item>
              <Item>
                <Title>Senha</Title>
                <Input placeholder="Insira sua senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
              </Item>
            </Date>
            <Entrar href="/principal">Entrar</Entrar>
            <CadastreSe>
              <p>Não possui uma conta?</p>
              <a onClick={() => router.push('/cadastro')} > Cadastre - se</a>
            </CadastreSe>
          </Form>
          <Info><BiHelpCircle /> Preciso de ajuda</Info>
        </Content>
      </Section>
    </Container>
  )
}

export default Home
