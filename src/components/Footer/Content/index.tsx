import React from 'react';
import styled from 'styled-components';
import Logo from '../../../images/logo.png';

const Content = styled.section`
    display: flex;
    width: 100%;
    height: 300px;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
`
const Email = styled.div`
    width: 100%;
    height: 130px;
    color: var(--white);
    background-color: var(--pFooterDark);
    display: flex;
    align-items: center;
    justify-content: center;
`
const Info = styled.div`
    width: 46%;
`
const Title = styled.h2`
    width: 390px;
    font-size: 1.2rem;
    margin-right: 0;
    margin-left: auto;
`
const Description = styled.p`
    width: 390px;
    margin-left: auto;
`
const Enviar = styled.div`
    width: 54%;
    padding-left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    width: 350px;
    margin-right: 20px;
    height: 35px;
    background-color: var(--p);
    border-radius: 13px;
    outline: none;
    border: none;
    padding-left: 15px;
    caret-color: var(--c1);
    color: var(--c1);
    ::placeholder{
        color: var(--c1); 
    }
`
const ButtonEnviar = styled.button`
    width: 110px;
    height: 35px;
    margin-right: auto;
    color: var(--white);
    background: rgb(58,83,135);
    background: linear-gradient(90deg, rgba(58,83,135,1) 0%, rgba(54,111,227,1) 100%);
    border: none;
    border-radius: 13px;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Lista = styled.ul`
    width: 100%;
    padding: 5px 0;
    list-style: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--c10);
    li a{
        color: var(--c1);
        margin: 0 15px;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    li:nth-child(2){
        a{
            width: 150px !important;
        }
    }
    li:nth-child(3){
        a{
            width: 110px !important;
        }
    }
    li img{
        height: 18px;
    }
`
const Direitos = styled.p`
    width: 100%;
    height: 50px;
    margin-top: auto;
    font-size: 1rem;
    background-color: var(--black);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
`
export default function FooterContent() {
    return (
        <Content>
            <Email>
                <Info>
                    <Title>
                        Quer ficar por dentro das melhores ofertas?
                        </Title>
                    <Description>
                        Então deixa seu e-mail com a gente, que <br /> a gente te conta tudo!
                        </Description>
                </Info>
                <Enviar>
                    <Input type="email" placeholder="Digite seu e-mail aqui" />
                    <ButtonEnviar>Enviar</ButtonEnviar>
                </Enviar>
            </Email>
            <Lista>
                <li><img src={Logo} alt="Logo" /></li>
                <li><a href="/principal" >Venda no MarkPlace</a></li>
                <li><a href="/principal" >Ofertas do dia</a></li>
                <li><a href="/principal" >Eletrodomésticos</a></li>
                <li><a href="/principal" >Celulares</a></li>
                <li><a href="/principal" >Móveis</a></li>
                <li><a href="/principal" >Tv e Vídeo</a></li>
                <li><a href="/principal" >Informática</a></li>
            </Lista>
            <Direitos>
                MarkPLACE - 2021. Todos os direitos reservados
            </Direitos>
        </Content>
    );
}