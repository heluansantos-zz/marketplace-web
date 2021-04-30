import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 120vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media(min-width: 768px){
        height: 100vh;
        flex-direction: row;
        
    }
`
export const RetangleLeft = styled.div`
    width: 100%;
    height: 150px;
    background-color: var(--p);
    display: flex;
    align-items: center;
    justify-content: center;
    @media(min-width: 768px){
        width: 30%;
        height: 100%;
        align-items: flex-start;
    }
`
export const Section = styled.section`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(min-width: 768px){
        padding-top: 2%;
        align-items: initial;
    }
    @media(min-width: 1000px){
        padding-top: 0;
    }
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: initial;
    height: 100%;
    @media(min-width: 768px){
        justify-content: center;
        
    }
`
export const Form = styled.form`
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 90%;
    @media(min-width: 768px){
        width: 400px;
    }
`
export const TopForm = styled.div`
    width: 100%;
    margin: 20px 0 10px 0;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Info = styled.div`
    display: none;
    @media(min-width: 999px){
        margin-top: 10px;
        margin-left: 7%;
        color: var(--p);
        text-decoration: none;
        outline: no\\sne;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 30px;
    }
`

export const Info2 = styled.a`
    width: 130px;
    color: var(--p);
    text-decoration: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        font-size: 20px;
        margin-right: 5px; 
    }
    @media(min-width: 999px){
        display: none;
    }
`
export const Logo = styled.img`
    width: 120px;
    @media(min-width: 768px){
        width: 140px;
        margin-top: 30%;
    }
`
export const Back = styled.a`
    color: var(--c9);
    text-decoration: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0px;
    p{
        margin-left: 10px;
    }
    @media(min-width: 768px){
        margin-left: 20px;
    }
`
export const Wellcome = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const Date = styled.div`
    width: 100%;
    margin-Bottom: 10px;
`
export const H1 = styled.h1`
    color: var(--p);
    margin-bottom: 10px;
    font-size: 1.3rem;
    font-weight: bold;
    @media(min-width: 999px){
        margin-bottom: 0;
    }
`
export const H5 = styled.h5`
    width: 90%;
    font-weight: normal;
    font-size: 0.8rem;
    color: var(--c9);
    @media(min-width: 999px){
        font-size: 0.9rem;
    }
`
export const Item = styled.div`
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const Title = styled.p`
    color: var(--c10);
    margin-bottom: 3px;
    font-weight: 600;
`
export const Input = styled.input`
    width: 100%;
    height: 35px;
    padding: 5px 0 5px 15px;
    background-color: var(--c1);
    font-size: 80%;
    border-radius: 10px;
    border: none;
    outline: none;
`
export const Data = styled.div`
    width: 65%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    svg{
        font-size: 1.3rem;
        color: var(--c8);
        position: absolute;
        top: 50%;
        left: 87%;
        cursor: pointer;
    }
    @media(min-width: 768px){
        width: 45%;

    }
    @media(min-width: 999px){
        svg{
            
            color: var(--c8);
            position: absolute;
            top: 50%;
            left: 85%;
            cursor: pointer;
        }
    }
`
export const Aviso = styled.div`
    display: flex;
    align-items: center;
    font-size: 70%;
    color: var(--c8);
    svg{
        font-size: 120%;
        margin-right: 5px;
        color: var(--pme1);
    }
`
export const Termos = styled.div`
    width: 100%;
    font-size: 80%;
    margin-bottom: 10px;
    p{
        color: var(--c10)
    }
`
export const LinkTermo = styled.a`
        text-decoration: none;
        outline: none;
        cursor: pointer;
        color: var(--s);
`
export const Entrar = styled.a`
    width: 140px;
    height: 40px;
    margin-bottom: 10px;
    background-color: var(--s);
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(min-width: 999px){
        width: 180px;
    }
`
export const CadastreSe = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 90%;
    p{
        color: var(--c10);
    }
    a{
        color: var(--s);
        margin-left: 10px;
    }
    
`