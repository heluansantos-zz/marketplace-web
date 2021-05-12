import styled from 'styled-components';

export const Container =  styled.div`
    width: 100%;
    height: 100%;
`
export const Teste = styled.div`
    flex: 1;
    height: 40px;
    background-color: var(--p);
    @media(max-width: 600px){
        width: 200px;
    }
`
export const Menu = styled.div`
    flex: 1;
    height: 40px;
    background-color: var(--pma1);
    @media(max-width: 760px){
        width: 200px;
    }
`