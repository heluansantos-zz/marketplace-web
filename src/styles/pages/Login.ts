import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media(min-width: 768px){
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
        padding-top: 10%;
        align-items: initial;
    }
    @media(min-width: 1000px){
        padding-top: 0%;
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
    @media(min-width: 768px){
        width: 400px;
    }
`
export const TopForm = styled.div`
    width: 100%;
    margin: 20px 0 40px 0;
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
    margin-left: 20px;
    p{
        margin-left: 10px;
    }
`
export const Wellcome = styled.div`
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const Date = styled.div`
    width: 100%;
    margin-Bottom: 30px;
`
export const H1 = styled.h1`
    color: var(--p);
    margin-bottom: 10px;
    font-size: 1.7rem;
    font-weight: bold;
    @media(min-width: 999px){
        margin-bottom: 0;
    }
`
export const H5 = styled.h5`
    font-weight: normal;
    color: var(--c9);
    @media(min-width: 999px){
        font-size: 1.1rem;
    }
`
export const Item = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const Title = styled.p`
    color: var(--c10);
    margin-bottom: 10px;
    font-weight: 600;
`
export const Input = styled.input`
    width: 100%;
    height: 45px;
    padding: 5px 0 5px 15px;
    background-color: var(--c1);
    border-radius: 10px;
    border: none;
    outline: none;
`
export const Entrar = styled.a`
    width: 60%;
    height: 40px;
    margin-bottom: 30px;
    background-color: var(--s);
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(min-width: 999px){
        width: 40%;
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