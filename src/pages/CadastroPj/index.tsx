import React, { useContext, useState } from 'react';
import Head from 'next/head';
import LogoImg from '../../images/logo.png';
import { BsChevronLeft } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import { BiCalendarAlt, BiInfoCircle } from 'react-icons/bi';
import Passo1 from './passo1';
import Passo2 from './passo2';
import Passo3 from './passo3';
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
  Back
} from './styles';
import { Context } from '../../context/GlobalContext';

export default function CadastroPj() {
  const {
    darkTheme,
    passo,
    prevStep,
    defineStep,
  } = useContext(Context);

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
              <Back onClick={() => prevStep()}><BsChevronLeft /> <p> Voltar</p></Back>
              <Info2 href="/"><BiHelpCircle /> Preciso de ajuda</Info2>
            </TopForm>
            {
              passo === 1 &&
              <Passo1 />
            }
            {
              passo === 2 &&
              <Passo2 />
            }
            {
              passo === 3 &&
              <Passo3 />
            }
          </Form>
          <Info><BiHelpCircle /> Preciso de ajuda</Info>
        </Content>
      </Section>
    </Container>
  )
}

