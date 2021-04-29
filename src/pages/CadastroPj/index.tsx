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
  BarOff,
  CircleOff,
  BarInitial,
  ProgressInitial
} from './styles';
import { CadastroPjContext } from '../../context/CadastroPj/CadastroPjContext';


export default function Cadastro() {
  const {
    darkTheme,
    razaoSocial,
    nomeFantasia,
    cnpj,
    telefone,
    email,
    setRazaoSocial,
    setNomeFantasia,
    setCnpj,
    setTelefone,
    setEmail
  } = useContext(CadastroPjContext);

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
              <Back href="/"><BsChevronLeft /> <p> Voltar</p></Back>
              <Info2 href="/"><BiHelpCircle /> Preciso de ajuda</Info2>
            </TopForm>
            <Wellcome>
              <H1>Crie sua conta</H1>
              <H5>Digite seus dados pessoais para ter acesso á
                  todas as ofertas e promoções</H5>
            </Wellcome>
            <Progress>
              <CircleOn>1</CircleOn>
              <BarInitial></BarInitial>
              <ProgressInitial></ProgressInitial>
              <CircleOff>2</CircleOff>
              <BarOff></BarOff>
              <CircleOff>3</CircleOff>
            </Progress>
            <Date>
              <Item>
                <Title>Razão Social</Title>
                <Input placeholder="Insira a razão social da sua empresa" type="text" value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} />
              </Item>
              <Item>
                <Title>Nome fantasia</Title>
                <Input placeholder="Insira o nome fantasia da sua empresa" type="text" value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} />
              </Item>
              <Item>
                <Title>CNPJ</Title>
                <Input placeholder="Digite o número do CNPJ" type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
              </Item>
              <Item>
                <Title>Telefone</Title>
                <Input placeholder="Digite o telefone da empresa" type="password" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
              </Item>
              <Item>
                <Title>Email</Title>
                <Input placeholder="Digite o melhor e-mail" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Item>
            </Date>
            <Entrar href="/CadastroPj/index2">Continuar</Entrar>
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

