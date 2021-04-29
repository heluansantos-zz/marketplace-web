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
  Aviso,
  LinkTermo,
  Termos,
  Data
} from './styles';
import { CadastroContext } from '../../context/Cadastro/CadastroContext';

const Home: React.FC = () => {
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
        <title>Homepage</title>
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
            <Date>
              <Item>
                <Title>Nome</Title>
                <Input placeholder="Insira seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
              </Item>
              <Item>
                <Title>CPF</Title>
                <Input placeholder="000.000.000-00" value={cpf} onChange={(e) => setCpf(e.target.value)} />
              </Item>
              <Data>
                <Title>Data de Nascimento</Title>
                <Input placeholder="Selecione uma data" value={dataNasc} onChange={(e) => setDataNasc(e.target.value)} />
                <BiCalendarAlt />
              </Data>
              <Item>
                <Title>Email</Title>
                <Input placeholder="Insira sua senha" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Item>
              <Item>
                <Title>Senha</Title>
                <Input placeholder="Insira sua senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <Aviso>
                  <BiInfoCircle /><p>A senha deve possuir pelo menos 6 caracteres</p>
                </Aviso>
              </Item>
            </Date>
            <Termos>
              <p>Ao criar uma conta, você está ciente dos <b> <LinkTermo href=""> Termos de Uso</LinkTermo></b> e <b> <LinkTermo href=""> Política de Privacidade.</LinkTermo></b></p>
            </Termos>
            <Entrar href="/">Criar sua conta</Entrar>
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

export default Home
