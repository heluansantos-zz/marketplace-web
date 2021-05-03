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
} from './styles';
import { Context } from '../../context/GlobalContext';


export default function Cadastro() {
  const {
    darkTheme,
  } = useContext(Context);

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

      <Entrar href="/">Finalizar</Entrar>
      <CadastreSe>
        <p>Já possui uma conta?</p> <a href="/">Entrar</a>
      </CadastreSe>

    </>
  )
}

