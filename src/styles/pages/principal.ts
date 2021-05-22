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
export const CarouselButtomPrev = styled.button`
    width: 25px;
    height: 35px;
    background-color: transparent;
    color: #ffffff;
    position: absolute;
    margin: auto auto auto 30px;
    border: none;
    cursor: pointer;
    outline: none;
    display: none;
    svg{
        font-size: 3rem;
    }
`
export const CarouselButtomNext = styled.button`
    width: 25px;
    height: 35px;
    background-color: transparent;
    color: #ffffff;
    position: absolute;
    margin-top: auto;
    margin-right: auto;
    margin-left: 94%;
    margin-bottom: auto;
    border: none;
    cursor: pointer;
    outline: none;
    display: none;
    svg{
        font-size: 3rem;
    }
`

export const Carousel = styled.div`
    width: 100%;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(58,83,135);
    background: linear-gradient(90deg, rgba(58,83,135,1) 0%, rgba(54,111,227,1) 100%);
    position: relative;
    margin-bottom: 30px;

    :hover{
        ${CarouselButtomNext}{
            display: inline;
        }
        ${CarouselButtomPrev}{
            display: inline;
        }
    }
`
export const CarouselContent = styled.div`
    width: 50%;
    padding: 0 10%;
`
export const CarouselTitle = styled.h2`
    margin-bottom: 5px;
`
export const CarouselDe = styled.p`
    color: #C4C4C4;
`
export const CarouselPor = styled.p`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 30px;
`
export const CarouselLocal = styled.div`
    svg{
        margin-right: 5px;
    }
`
export const CarouselItem = styled.div`
    width: 50%;
    padding: 0 10%;
`
export const CarouselImg = styled.img`
    height: 200px;
`
export const CarrouselNavigation = styled.div`

`
export const CarouselNavigationItemOn = styled.div`

`
export const CarouselNavigationItemOff = styled.div`

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
    margin-left: 3%;
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
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const MaisComprados = styled.section`
    width: 100%;
    padding-top: 20px;
`
export const CategoriaEmDestaque = styled.section`
    width: 100%;
    ${Produtos}{
        padding: 0 50px;
    }
    padding-top: 20px;
`
export const MaisAcessados = styled.section`
    width: 100%;
    margin-top: 30px;
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
        -webkit-box-shadow: 4px 6px 11px -7px rgba(0,0,0,0.83); 
        box-shadow: 4px 6px 11px -7px rgba(0,0,0,0.83);
        ${ProdutoFavorito}{
            opacity: 1;
        }
    }
`
export const BelezaESaude = styled.section`
    width: 100%;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 30px;
    background-color: #E1E6F1;
    ${Item}{
        background-color: #ffffff;
    }
`
export const ButtonPrev = styled.button`
    width: 25px;
    height: 35px;
    background-color: #E5F1FE;
    margin-left: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    svg{
        opacity: 1;
        width: 10px;
        height: 20px;
        color: #1976D2; 
    }
`
export const ButtonNext = styled.button`
    width: 25px;
    height: 35px;
    background-color: #E5F1FE;
    margin-right: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    svg{
        opacity: 1;
        width: 10px;
        height: 20px;
        color: #1976D2;
    }
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
export const ProudutoEmDestaque = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const InfoProdutoEmDestaque = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 90px;
    background: rgb(58,83,135);
    background: linear-gradient(180deg, rgba(58,83,135,1) 0%, rgba(54,111,227,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ImgProdutoEmDestaque = styled.img`
    height: 70px;
`
export const TitleProdutoEmDestaque = styled.h3`
    margin-top: 15px;
    color: #4D4D4D;
`
export const ExploreMais = styled.div`
    width: 75px;
    height: 75px;
    border-radius: 50px;
    border: 1px solid #4D4D4D;
    color: #4D4D4D;
    background-color: #EFEFEF;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`