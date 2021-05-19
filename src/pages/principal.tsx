import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from '../components/Header/NavBar';
import Footer from '../components/Footer/Container';
import ImgProduto from '../images/produto1.png';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import {
    ButtonNext,
    ButtonPrev,
    CategoriaItems,
    CategoriaLista,
    CategoriaOptions,
    Categorias,
    Container,
    Data,
    ExibeProduto,
    ImgProdutoItem,
    InfoProduto,
    Item,
    MaisComprados,
    Novidades,
    PrincipalTop,
    ProdutoButton,
    ProdutoDe,
    ProdutoFavorito,
    ProdutoNome,
    ProdutoOu,
    ProdutoPor,
    Produtos,
    ProdutosTop,
    Title
} from '../styles/pages/principal';
const Principal: React.FC = () => {

    const [favoritoState, setFavoritoState] = useState(false);

    function setFavorito() {
        if (favoritoState) {
            setFavoritoState(false);
        } else {
            setFavoritoState(true);
        }
    }

    return (
        <Container>
            <Head>
                <title>Tela Inicial</title>
            </Head>
            <NavBar />
            <PrincipalTop>
                <Categorias>
                    <CategoriaOptions>
                        <CategoriaLista>
                            <CategoriaItems>Todos os produtos</CategoriaItems>
                            <CategoriaItems>Beleza e Saúde</CategoriaItems>
                            <CategoriaItems>Casa, móveis e decoração</CategoriaItems>
                            <CategoriaItems>Eletrodomésticos</CategoriaItems>
                            <CategoriaItems>Eletrônicos</CategoriaItems>
                            <CategoriaItems>Esporte e lazer </CategoriaItems>
                            <CategoriaItems>Pet Shop</CategoriaItems>
                            <CategoriaItems>Outros</CategoriaItems>
                        </CategoriaLista>
                    </CategoriaOptions>
                </Categorias>
                <ProdutosTop>
                    <ButtonPrev></ButtonPrev>
                    <Produtos>
                        <Item>
                            <ExibeProduto>
                                <InfoProduto>
                                    <ImgProdutoItem src={ImgProduto} />
                                    <ProdutoNome>Smartphone Xiaomi Redmi Note 9s</ProdutoNome>
                                    <ProdutoDe>de R$1.700,00 por</ProdutoDe>
                                    <ProdutoPor>R$1.300,00</ProdutoPor>
                                    <ProdutoOu>ou 10x de 130,00</ProdutoOu>
                                </InfoProduto>
                                <ProdutoFavorito onClick={setFavorito}>
                                    {
                                        favoritoState &&
                                        <AiFillHeart />
                                    }
                                    {
                                        !favoritoState &&
                                        <AiOutlineHeart />
                                    }
                                </ProdutoFavorito>
                            </ExibeProduto>
                            <ProdutoButton>Adicionar no carrinho <BiShoppingBag /> </ProdutoButton>
                        </Item>
                        <Item>
                            <ExibeProduto>
                                <InfoProduto>
                                    <ImgProdutoItem src={ImgProduto} />
                                    <ProdutoNome>Smartphone Xiaomi Redmi Note 9s</ProdutoNome>
                                    <ProdutoDe>de R$1.700,00 por</ProdutoDe>
                                    <ProdutoPor>R$1.300,00</ProdutoPor>
                                    <ProdutoOu>ou 10x de 130,00</ProdutoOu>
                                </InfoProduto>
                                <ProdutoFavorito onClick={setFavorito}>
                                    {
                                        favoritoState &&
                                        <AiFillHeart />
                                    }
                                    {
                                        !favoritoState &&
                                        <AiOutlineHeart />
                                    }
                                </ProdutoFavorito>
                            </ExibeProduto>
                            <ProdutoButton>Adicionar no carrinho <BiShoppingBag /> </ProdutoButton>
                        </Item>
                        <Item>
                            <ExibeProduto>
                                <InfoProduto>
                                    <ImgProdutoItem src={ImgProduto} />
                                    <ProdutoNome>Smartphone Xiaomi Redmi Note 9s</ProdutoNome>
                                    <ProdutoDe>de R$1.700,00 por</ProdutoDe>
                                    <ProdutoPor>R$1.300,00</ProdutoPor>
                                    <ProdutoOu>ou 10x de 130,00</ProdutoOu>
                                </InfoProduto>
                                <ProdutoFavorito onClick={setFavorito}>
                                    {
                                        favoritoState &&
                                        <AiFillHeart />
                                    }
                                    {
                                        !favoritoState &&
                                        <AiOutlineHeart />
                                    }
                                </ProdutoFavorito>
                            </ExibeProduto>
                            <ProdutoButton>Adicionar no carrinho <BiShoppingBag /> </ProdutoButton>
                        </Item>
                        <Item>
                            <ExibeProduto>
                                <InfoProduto>
                                    <ImgProdutoItem src={ImgProduto} />
                                    <ProdutoNome>Smartphone Xiaomi Redmi Note 9s</ProdutoNome>
                                    <ProdutoDe>de R$1.700,00 por</ProdutoDe>
                                    <ProdutoPor>R$1.300,00</ProdutoPor>
                                    <ProdutoOu>ou 10x de 130,00</ProdutoOu>
                                </InfoProduto>
                                <ProdutoFavorito onClick={setFavorito}>
                                    {
                                        favoritoState &&
                                        <AiFillHeart />
                                    }
                                    {
                                        !favoritoState &&
                                        <AiOutlineHeart />
                                    }
                                </ProdutoFavorito>
                            </ExibeProduto>
                            <ProdutoButton>Adicionar no carrinho <BiShoppingBag /> </ProdutoButton>
                        </Item>
                    </Produtos>
                    <ButtonNext></ButtonNext>
                </ProdutosTop>
            </PrincipalTop>
            <Novidades>
                <Title>Últimas novidades <Data>07/05/2021</Data> </Title>
                <Produtos>
                    <ButtonPrev></ButtonPrev>
                    <Item>
                        <ExibeProduto>
                            <InfoProduto>
                                <ImgProdutoItem src={ImgProduto} />
                                <ProdutoNome>Smartphone Xiaomi Redmi Note 9s</ProdutoNome>
                                <ProdutoDe>de R$1.700,00 por</ProdutoDe>
                                <ProdutoPor>R$1.300,00</ProdutoPor>
                                <ProdutoOu>ou 10x de 130,00</ProdutoOu>
                            </InfoProduto>
                            <ProdutoFavorito onClick={setFavorito}>
                                {
                                    favoritoState &&
                                    <AiFillHeart />
                                }
                                {
                                    !favoritoState &&
                                    <AiOutlineHeart />
                                }
                            </ProdutoFavorito>
                        </ExibeProduto>
                        <ProdutoButton>Adicionar no carrinho <BiShoppingBag /> </ProdutoButton>
                    </Item>
                    <Item>
                        <ExibeProduto>
                            <InfoProduto>
                                <ImgProdutoItem src={ImgProduto} />
                                <ProdutoNome>Smartphone Xiaomi Redmi Note 9s</ProdutoNome>
                                <ProdutoDe>de R$1.700,00 por</ProdutoDe>
                                <ProdutoPor>R$1.300,00</ProdutoPor>
                                <ProdutoOu>ou 10x de 130,00</ProdutoOu>
                            </InfoProduto>
                            <ProdutoFavorito onClick={setFavorito}>
                                {
                                    favoritoState &&
                                    <AiFillHeart />
                                }
                                {
                                    !favoritoState &&
                                    <AiOutlineHeart />
                                }
                            </ProdutoFavorito>
                        </ExibeProduto>
                        <ProdutoButton>Adicionar no carrinho <BiShoppingBag /> </ProdutoButton>
                    </Item>
                    <Item>
                        <ExibeProduto>
                            <InfoProduto>
                                <ImgProdutoItem src={ImgProduto} />
                                <ProdutoNome>Smartphone Xiaomi Redmi Note 9s</ProdutoNome>
                                <ProdutoDe>de R$1.700,00 por</ProdutoDe>
                                <ProdutoPor>R$1.300,00</ProdutoPor>
                                <ProdutoOu>ou 10x de 130,00</ProdutoOu>
                            </InfoProduto>
                            <ProdutoFavorito onClick={setFavorito}>
                                {
                                    favoritoState &&
                                    <AiFillHeart />
                                }
                                {
                                    !favoritoState &&
                                    <AiOutlineHeart />
                                }
                            </ProdutoFavorito>
                        </ExibeProduto>
                        <ProdutoButton>Adicionar no carrinho <BiShoppingBag /> </ProdutoButton>
                    </Item>
                    <Item>
                        <ExibeProduto>
                            <InfoProduto>
                                <ImgProdutoItem src={ImgProduto} />
                                <ProdutoNome>Smartphone Xiaomi Redmi Note 9s</ProdutoNome>
                                <ProdutoDe>de R$1.700,00 por</ProdutoDe>
                                <ProdutoPor>R$1.300,00</ProdutoPor>
                                <ProdutoOu>ou 10x de 130,00</ProdutoOu>
                            </InfoProduto>
                            <ProdutoFavorito onClick={setFavorito}>
                                {
                                    favoritoState &&
                                    <AiFillHeart />
                                }
                                {
                                    !favoritoState &&
                                    <AiOutlineHeart />
                                }
                            </ProdutoFavorito>
                        </ExibeProduto>
                        <ProdutoButton>Adicionar no carrinho <BiShoppingBag /> </ProdutoButton>
                    </Item>
                    <Item>
                        <ExibeProduto>
                            <InfoProduto>
                                <ImgProdutoItem src={ImgProduto} />
                                <ProdutoNome>Smartphone Xiaomi Redmi Note 9s</ProdutoNome>
                                <ProdutoDe>de R$1.700,00 por</ProdutoDe>
                                <ProdutoPor>R$1.300,00</ProdutoPor>
                                <ProdutoOu>ou 10x de 130,00</ProdutoOu>
                            </InfoProduto>
                            <ProdutoFavorito onClick={setFavorito}>
                                {
                                    favoritoState &&
                                    <AiFillHeart />
                                }
                                {
                                    !favoritoState &&
                                    <AiOutlineHeart />
                                }
                            </ProdutoFavorito>
                        </ExibeProduto>
                        <ProdutoButton>Adicionar no carrinho <BiShoppingBag /> </ProdutoButton>
                    </Item>
                    <ButtonNext></ButtonNext>
                </Produtos>
            </Novidades>
            <MaisComprados>
                <Title>Mais Comprados</Title>
                <Produtos>
                    <ButtonPrev></ButtonPrev>
                    <Item>
                        <ExibeProduto>
                            <InfoProduto>
                                <ImgProdutoItem src={ImgProduto} />
                                <ProdutoNome>Smartphone Xiaomi Redmi Note 9s</ProdutoNome>
                                <ProdutoDe>de R$1.700,00 por</ProdutoDe>
                                <ProdutoPor>R$1.300,00</ProdutoPor>
                                <ProdutoOu>ou 10x de 130,00</ProdutoOu>
                            </InfoProduto>
                            <ProdutoFavorito onClick={setFavorito}>
                                {
                                    favoritoState &&
                                    <AiFillHeart />
                                }
                                {
                                    !favoritoState &&
                                    <AiOutlineHeart />
                                }
                            </ProdutoFavorito>
                        </ExibeProduto>
                        <ProdutoButton>Adicionar no carrinho <BiShoppingBag /> </ProdutoButton>
                    </Item>
                    <Item>
                        <ExibeProduto>
                            <InfoProduto>
                                <ImgProdutoItem src={ImgProduto} />
                                <ProdutoNome>Smartphone Xiaomi Redmi Note 9s</ProdutoNome>
                                <ProdutoDe>de R$1.700,00 por</ProdutoDe>
                                <ProdutoPor>R$1.300,00</ProdutoPor>
                                <ProdutoOu>ou 10x de 130,00</ProdutoOu>
                            </InfoProduto>
                            <ProdutoFavorito onClick={setFavorito}>
                                {
                                    favoritoState &&
                                    <AiFillHeart />
                                }
                                {
                                    !favoritoState &&
                                    <AiOutlineHeart />
                                }
                            </ProdutoFavorito>
                        </ExibeProduto>
                        <ProdutoButton>Adicionar no carrinho <BiShoppingBag /> </ProdutoButton>
                    </Item>
                    <Item>
                        <ExibeProduto>
                            <InfoProduto>
                                <ImgProdutoItem src={ImgProduto} />
                                <ProdutoNome>Smartphone Xiaomi Redmi Note 9s</ProdutoNome>
                                <ProdutoDe>de R$1.700,00 por</ProdutoDe>
                                <ProdutoPor>R$1.300,00</ProdutoPor>
                                <ProdutoOu>ou 10x de 130,00</ProdutoOu>
                            </InfoProduto>
                            <ProdutoFavorito onClick={setFavorito}>
                                {
                                    favoritoState &&
                                    <AiFillHeart />
                                }
                                {
                                    !favoritoState &&
                                    <AiOutlineHeart />
                                }
                            </ProdutoFavorito>
                        </ExibeProduto>
                        <ProdutoButton>Adicionar no carrinho <BiShoppingBag /> </ProdutoButton>
                    </Item>
                    <Item>
                        <ExibeProduto>
                            <InfoProduto>
                                <ImgProdutoItem src={ImgProduto} />
                                <ProdutoNome>Smartphone Xiaomi Redmi Note 9s</ProdutoNome>
                                <ProdutoDe>de R$1.700,00 por</ProdutoDe>
                                <ProdutoPor>R$1.300,00</ProdutoPor>
                                <ProdutoOu>ou 10x de 130,00</ProdutoOu>
                            </InfoProduto>
                            <ProdutoFavorito onClick={setFavorito}>
                                {
                                    favoritoState &&
                                    <AiFillHeart />
                                }
                                {
                                    !favoritoState &&
                                    <AiOutlineHeart />
                                }
                            </ProdutoFavorito>
                        </ExibeProduto>
                        <ProdutoButton>Adicionar no carrinho <BiShoppingBag /> </ProdutoButton>
                    </Item>
                    <Item>
                        <ExibeProduto>
                            <InfoProduto>
                                <ImgProdutoItem src={ImgProduto} />
                                <ProdutoNome>Smartphone Xiaomi Redmi Note 9s</ProdutoNome>
                                <ProdutoDe>de R$1.700,00 por</ProdutoDe>
                                <ProdutoPor>R$1.300,00</ProdutoPor>
                                <ProdutoOu>ou 10x de 130,00</ProdutoOu>
                            </InfoProduto>
                            <ProdutoFavorito onClick={setFavorito}>
                                {
                                    favoritoState &&
                                    <AiFillHeart />
                                }
                                {
                                    !favoritoState &&
                                    <AiOutlineHeart />
                                }
                            </ProdutoFavorito>
                        </ExibeProduto>
                        <ProdutoButton>Adicionar no carrinho <BiShoppingBag /> </ProdutoButton>
                    </Item>
                    <ButtonNext></ButtonNext>
                </Produtos>
            </MaisComprados>
            <Footer />
        </Container>
    );
}

export default Principal;
