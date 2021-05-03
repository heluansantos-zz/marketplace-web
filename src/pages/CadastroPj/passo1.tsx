import React, { useContext } from 'react';
import {
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
import { Context } from '../../context/GlobalContext';

export default function Passo1() {
    const {
        darkTheme,
        razaoSocial,
        nomeFantasia,
        cnpj,
        telefone,
        emailpj,
        setRazaoSocial,
        setNomeFantasia,
        setCnpj,
        setTelefone,
        setEmailpj,
    } = useContext(Context);

    const {
        defineStep
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
                    <Input placeholder="Digite o melhor e-mail" type="text" value={emailpj} onChange={(e) => setEmailpj(e.target.value)} />
                </Item>
            </Date>
            <Entrar onClick={() => defineStep(2)}>Continuar</Entrar>
            <CadastreSe>
                <p>Já possui uma conta?</p> <a href="/">Entrar</a>
            </CadastreSe>
        </>
    )
}

