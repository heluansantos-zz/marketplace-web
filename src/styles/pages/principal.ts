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
export const PrincipalTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Categorias = styled.section`
    width: 20%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
`
export const CategoriaOptions = styled.div`
    width: 240px;
    height: 270px;
    border: 1px solid var(--c4);
    border-radius: 13px;
    padding: 10px;
    font-size: 90%;
`
export const CategoriaItems = styled.li`
    margin-bottom: 10px;
    list-style: none;
    cursor: pointer;
`
export const CategoriaLista = styled.ul`
    margin-left: 20px;
    color: #4D4D4D;
    ${CategoriaItems}:first-child{
        color: #233B6C;
        font-weight: bold;
    }
`
export const Title = styled.h2`
    width: 200px;
    margin-right: auto;
    margin-left: 6%;
    margin-bottom: 15px;
    font-size: 90%;
    color: #233B6C;
    display: flex;
    align-items: center;
    text-align: start;
`
export const Data = styled.p`
    margin-left: 5px;
    margin-top: 3px;
    font-size: 70%;
    color: #8A8A8A;
`
export const ProdutosTop = styled.div`
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Produtos = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Novidades = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const MaisComprados = styled.section`
    width: 100%;

`
export const BelezaESaude = styled.section`
    width: 100%;

`
export const CategoriaEmDestaque = styled.section`
    width: 100%;

`
export const MaisAcessados = styled.section`
    width: 100%;

`
export const ProdutoFavorito = styled.div`
    color: #4D4D4D;
    height: 20px;
    opacity: 0;
    svg{
        font-size: 130%;
    }
    cursor: pointer;
`
export const Item = styled.div`
    width: 200px;
    height: 270px;
    border: 1px solid var(--c4);
    border-radius: 13px;
    margin: 0 15px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    :hover{
        ${ProdutoFavorito}{
            opacity: 1;
        }
    }
`
export const ButtonPrev = styled.button`
    width: 25px;
    height: 35px;
    background-color: #1976D2;
    opacity: 0.2;
    margin-left: 20px;
`
export const ButtonNext = styled.button`
    width: 25px;
    height: 35px;
    background-color: #1976D2;
    opacity: 0.2;
    margin-right: 20px;
`
export const ExibeProduto = styled.div`
    display:flex;
`
export const InfoProduto = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 90%;
`
export const ImgProdutoItem = styled.img`
    width: 70px;
    height: 70px;
    margin: 0 auto;
`
export const ProdutoNome = styled.p`
    width: 140px;
    font-weight: bold;
    color: #233B6C;
    margin-bottom: 10px;
`
export const ProdutoDe = styled.p`
    color: #BABABA;
    font-size: 80%;
`
export const ProdutoPor = styled.p`
    font-weight: bold;
    font-size: 120%;
    color: #233B6C;
`
export const ProdutoOu = styled.p`
    color: #4D4D4D;
    font-size: 90%;
`

export const ProdutoButton = styled.button`
    width: 90%;
    height: 30px;
    font-size: 70%;
    border-radius: 5px;
    background: rgb(58,83,135);
    background: linear-gradient(90deg, rgba(58,83,135,1) 0%, rgba(54,111,227,1) 100%);
    color: #FFFFFF;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;
    svg{
        margin-left: 4px;
        font-size: 110%;
    }
    :hover{
        opacity: 1;

    }
`