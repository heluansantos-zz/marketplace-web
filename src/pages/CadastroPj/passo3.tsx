import React, { useContext } from 'react';
import Head from 'next/head';
import LogoImg from '../../images/logo.png';
import { BsChevronLeft } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import { BiCalendarAlt, BiInfoCircle } from 'react-icons/bi';
import {
  Wellcome,
  H1,
  H5,
  Entrar,
  CadastreSe,
  Progress,
  CircleOn,
  BarOn,
  Date,
  Item,
  Title,
  Input,
  Items,
  ItemLeft,
  ItemRight,
  Select,
  SelectBanco,
  Prefere,
  NoCEP,

} from './styles';
import { Context } from '../../context/GlobalContext';
import { LinkTermo, Termos } from '../../styles/pages/Cadastro';


export default function Cadastro() {
  const {
    darkTheme,
    nomePj,
    cpfPJ,
    bancoPj,
    tipoConta,
    agencia,
    digitoAgencia,
    numeroConta,
    digitoConta,
    setNomePj,
    setCpfPj,
    setBancoPj,
    setTipoConta,
    setAgencia,
    setDigitoAgencia,
    setNumeroConta,
    setDigitoConta,
    defineStep
  } = useContext(Context);

  const state = [
    {id: 0, sigla: 'AC'},
    {id: 1, sigla: 'AP'},
    {id: 2, sigla: 'AM'},
    {id: 3, sigla: 'BA'},
    {id: 4, sigla: 'CE'},
    {id: 5, sigla: 'DF'},
    {id: 6, sigla: 'ES'},
    {id: 7, sigla: 'GO'},
    {id: 8, sigla: 'MA'},
    {id: 9, sigla: 'MT'},
    {id: 10, sigla: 'MS'},
    {id: 11, sigla: 'MG'},
    {id: 12, sigla: 'PA'},
    {id: 13, sigla: 'PB'},
    {id: 14, sigla: 'PR'},
    {id: 15, sigla: 'PE'},
    {id: 16, sigla: 'PI'},
    {id: 17, sigla: 'RJ'},
    {id: 18, sigla: 'RN'},
    {id: 19, sigla: 'RS'},
    {id: 20, sigla: 'RO'},
    {id: 21, sigla: 'RR'},
    {id: 22, sigla: 'SC'},
    {id: 23, sigla: 'SP'},
    {id: 24, sigla: 'SE'},
    {id: 25, sigla: 'TO'},
  ]

  return (
    <>
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
      <Date>
        <Item>
          <Title>Nome</Title>
          <Input 
            placeholder="Insira o nome do titular" 
            type="text" value={nomePj} 
            onChange={(e) => 
            setNomePj(e.target.value)} />
        </Item>
        <Item>
          <Title>CNPJ ou CPF</Title>
          <Input 
            placeholder="Digite o número do CNPJ ou CPF do titular" 
            type="text" 
            value={cpfPJ} 
            onChange={(e) => setCpfPj(e.target.value)} />
        </Item>
        <Items>
          <SelectBanco>
            <Title>Banco</Title>
            <select name="Estados" onChange={(e) => {
              const opt = e.target.value;
              setBancoPj(opt);
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
          </SelectBanco>
          <Select>
            <Title>Tipo de conta</Title>
            <select name="Estados" onChange={(e) => {
              const opt = e.target.value;
              setTipoConta(opt);
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
        <Items>
          <ItemLeft>
            <Title>Agência</Title>
            <Input placeholder="Digite o número da agência" type="text" value={agencia} onChange={(e) => setAgencia(e.target.value)} />
          </ItemLeft>
          <ItemRight>
            <Title>Dígito da agência</Title>
            <Input placeholder="Digite o dígito da agência" type="text" value={digitoAgencia} onChange={(e) => setDigitoAgencia(e.target.value)} />
          </ItemRight>
        </Items>
        <Items>
          <ItemLeft>
            <Title>Número da conta</Title>
            <Input placeholder="Digite o número da conta" type="text" value={numeroConta} onChange={(e) => setNumeroConta(e.target.value)} />
          </ItemLeft>
          <ItemRight>
            <Title>Dígito da conta</Title>
            <Input placeholder="Digite o dígito da conta" type="text" value={digitoConta} onChange={(e) => setDigitoConta(e.target.value)} />
          </ItemRight>
        </Items>
      </Date>
      <Termos>
        <p>Ao criar uma conta, você está ciente dos <b> <LinkTermo href=""> Termos de Uso</LinkTermo></b> e <b> <LinkTermo href=""> Política de Privacidade.</LinkTermo></b></p>
      </Termos>
      <Entrar href="/">Criar sua conta</Entrar>
      <CadastreSe>
        <p>Já possui uma conta?</p> <a href="/">Entrar</a>
      </CadastreSe>

    </>
  )
}

