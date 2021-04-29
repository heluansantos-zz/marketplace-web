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
export const Progress = styled.div`
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CircleOn = styled.div`
    width: 20px;
    height: 20px;
    color: #ffffff;
    background-color: var(--blue);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CircleOff = styled.div`
    width: 20px;
    height: 20px;
    color: #ffffff;
    background-color: var(--gray);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ProgressInitial = styled.div`
    width: 41%;
    border: 1px solid var(--gray);
`
export const BarInitial = styled.div`
    width: 1%;
    border: 2px solid var(--blue);
`
export const BarOn = styled.div`
    width: 42%;
    border: 2px solid var(--blue);
`
export const BarOff = styled.div`
    width: 42%;
    border: 1px solid var(--gray);
`
export const Date = styled.div`
    width: 100%;
    margin-Bottom: 10px;
`
export const Item = styled.div`
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const Items = styled.div`
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`
export const ItemLeft = styled.div`
    width: 65%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const ItemRight = styled.div`
    width: 30%;
    margin-left: 5%;
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
export const InputError = styled.input`
    width: 100%;
    height: 35px;
    padding: 5px 0 5px 15px;
    background-color: var(--c1);
    font-size: 80%;
    border-radius: 10px;
    border: 1px solid red;
    outline: none;
`
export const Select = styled.div`
    width: 30%;
    margin-left: 5%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    select {
        background-color: var(--c1);
        padding: 0 15px;
        font-size: 80%;
        color: var(--c8);
        width: 100%;
        height: 35px;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 8px;

    }
`
export const Prefere = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 10px;
    p {
        font-size: 80%;
        font-weight: 600;
        width: 89px;
        color: var(--p);
    }
    div {
        width: calc(100% - 60px);
        height: 0.01rem;
        border: 1px solid var(--blue2);
    }
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
export const NoCEP = styled.div`
    width: 170px;
    margin-right: 0;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 90%;
    p{
        color: var(--c10);
    }
    a{
        color: var(--p);
        margin-left: 10px;
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