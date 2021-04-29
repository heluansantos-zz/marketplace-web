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
  CircleOff,
  BarOn,
  BarInitial,
  ProgressInitial,
  ItemLeft,
  Items,
  ItemRight,
  Select,
  NoCEP,
  Prefere
} from './styles';
import { CadastroPjContext } from '../../context/CadastroPj/CadastroPjContext';


export default function Cadastro() {
  const {
    darkTheme,
    rua,
    bairro,
    numero,
    cidade,
    estado,
    cep,
    setRua,
    setBairro,
    setNumero,
    setCidade,
    setEstado,
    setCep,
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
              <Back href="/CadastroPj"><BsChevronLeft /> <p> Voltar</p></Back>
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
              <BarInitial></BarInitial>
              <ProgressInitial></ProgressInitial>
              <CircleOff>3</CircleOff>
            </Progress>
            <Date>
              <Item>
                <Title>Endereço</Title>
                <Input placeholder="Insira a razão social da sua empresa" type="text" value={rua} onChange={(e) => setRua(e.target.value)} />
              </Item>
              <Items>
                <ItemLeft>
                  <Title>Bairro</Title>
                  <Input placeholder="Digite o bairro" type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                </ItemLeft>
                <ItemRight>
                  <Title>Número</Title>
                  <Input placeholder="Digite o número" type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
                </ItemRight>
              </Items>
              <Items>
                <ItemLeft>
                  <Title>Cidade</Title>
                  <Input placeholder="Digite a cidade" type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                </ItemLeft>
                <Select>
                  <Title>Estado</Title>
                  <select name="Estados" onChange={(e) => {
                    const opt = e.target.value;
                    setEstado(Number(opt));
                  }}>
                    <option value="-1"></option>
                    <option value="0">AC</option>
                    <option value="1">AL</option>
                    <option value="2">AP</option>
                    <option value="3">AM</option>
                    <option value="4">BA</option>
                    <option value="5">CE</option>
                    <option value="6">DF</option>
                    <option value="7">ES</option>
                    <option value="8">GO</option>
                    <option value="9">MA</option>
                    <option value="10">MT</option>
                    <option value="11">MS</option>
                    <option value="12">MG</option>
                    <option value="13">PA</option>
                    <option value="14">PB</option>
                    <option value="15">PR</option>
                    <option value="16">PE</option>
                    <option value="17">PI</option>
                    <option value="18">RJ</option>
                    <option value="19">RN</option>
                    <option value="20">RS</option>
                    <option value="21">RO</option>
                    <option value="22">RR</option>
                    <option value="23">SC</option>
                    <option value="24">SP</option>
                    <option value="25">SE</option>
                    <option value="26">TO</option>
                  </select>
                </Select>
              </Items>
              <Prefere>
                <p>Ou se preferir</p><div></div>
              </Prefere>
              <Item>
                <Title>CEP</Title>
                <Input placeholder="Insira o nome fantasia da sua empresa" type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
              </Item>
              <NoCEP>
                <p>Não sabe o cep?</p> <a href="">Clique aqui</a>
              </NoCEP>
            </Date>
            <Entrar href="/CadastroPj/index3">Continuar</Entrar>
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

