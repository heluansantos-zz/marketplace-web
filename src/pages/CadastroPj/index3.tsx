import React, { useContext } from 'react';
import Head from 'next/head';
import LogoImg from '../../images/logo.png';
import { BsChevronLeft } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import { BiCalendarAlt, BiInfoCircle } from 'react-icons/bi';
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
  CadastreSe,
  Progress,
  CircleOn,
  BarOn,
} from './styles';
import { CadastroContext } from '../../context/Cadastro/CadastroContext';


export default function Cadastro() {
  const {
    darkTheme,
    nome,
    cpf,
    dataNasc,
    email,
    senha,
    setNome,
    setCpf,
    setDataNasc,
    setEmail,
    setSenha
  } = useContext(CadastroContext);
  
  return (
    <Container>
      <Head>
        <title>Cadastro Pessoa Jurídica</title>
      </Head>
      <RetangleLeft>
        <Logo src={LogoImg} />
      </RetangleLeft>
      <Section>
        <Content>
          <Form>
            <TopForm>
              <Back href="/CadastroPj/index2"><BsChevronLeft /> <p> Voltar</p></Back>
              <Info2 href="/"><BiHelpCircle /> Preciso de ajuda</Info2>
            </TopForm>
            <Wellcome>
              <H1>Crie sua conta</H1>
              <H5>Digite seus dados pessoais para ter acesso á
                  todas as ofertas e promoções</H5>
            </Wellcome>
            <Progress>
              <CircleOn>1</CircleOn>
              <BarOn></BarOn>
              <CircleOn>2</CircleOn>
              <BarOn></BarOn>
              <CircleOn>3</CircleOn>
            </Progress>
            
            <Entrar href="/">Finalizar</Entrar>
            <CadastreSe>
              <p>Já possui uma conta?</p> <a href="/">Entrar</a>
            </CadastreSe>
          </Form>
          <Info><BiHelpCircle /> Preciso de ajuda</Info>
        </Content>
      </Section>
    </Container>
  )
}

