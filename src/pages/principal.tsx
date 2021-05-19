import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from '../components/Header/NavBar';
import Footer from '../components/Footer/Container';
import ImgProduto from '../images/produto1.png';
import ImgProduto2 from '../images/produto2.png';
import ImgProduto3 from '../images/produto3.png';
import ImgProduto4 from '../images/produto4.png';
import ImgProduto5 from '../images/produto5.png';
import ImgProduto6 from '../images/produto6.png';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { dadosProdutoTop } from '../Data/produtosTop';
import { dadosUltimasNovidades } from '../Data/ultimasNovidades';
import { dadosMaisComprados } from '../Data/maisComprados';
import { dadosBelezaESaude } from '../Data/belezaEsaude';
import { dadosEmDestaque } from '../Data/emDestaque';
import { dadosMaisAcessados } from '../Data/maisAcessados';

import {
    BelezaESaude,
    ButtonNext,
    ButtonPrev,
    CategoriaEmDestaque,
    CategoriaItems,
    CategoriaLista,
    CategoriaOptions,
    Categorias,
    Container,
    Data,
    ExibeProduto,
    ExploreMais,
    ImgProdutoEmDestaque,
    ImgProdutoItem,
    InfoProduto,
    InfoProdutoEmDestaque,
    Item,
    MaisAcessados,
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
    ProudutoEmDestaque,
    Title,
    TitleProdutoEmDestaque
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
                    <ButtonPrev><FaChevronLeft /></ButtonPrev>
                    <Produtos>
                        {
                            dadosProdutoTop.map((produto) => {
                                return (
                                    <Item>
                                        <ExibeProduto>
                                            <InfoProduto>
                                                <ImgProdutoItem src={ImgProduto} />
                                                <ProdutoNome>{produto.nome}</ProdutoNome>
                                                <ProdutoDe>{produto.de}</ProdutoDe>
                                                <ProdutoPor>{produto.por}</ProdutoPor>
                                                <ProdutoOu>{produto.ou}</ProdutoOu>
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
                                );
                            })
                        }
                    </Produtos>
                    <ButtonNext><FaChevronRight /></ButtonNext>
                </ProdutosTop>
            </PrincipalTop>
            <Novidades>
                <Title>Últimas novidades <Data>07/05/2021</Data> </Title>
                <Produtos>
                    <ButtonPrev><FaChevronLeft /></ButtonPrev>
                    {
                        dadosUltimasNovidades.map((produto) => {
                            return (
                                <Item>
                                    <ExibeProduto>
                                        <InfoProduto>
                                            <ImgProdutoItem src={ImgProduto} />
                                            <ProdutoNome>{produto.nome}</ProdutoNome>
                                            <ProdutoDe>{produto.de}</ProdutoDe>
                                            <ProdutoPor>{produto.por}</ProdutoPor>
                                            <ProdutoOu>{produto.ou}</ProdutoOu>
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
                            );
                        })
                    }
                    <ButtonNext><FaChevronRight /></ButtonNext>
                </Produtos>
            </Novidades>
            <MaisComprados>
                <Title>Mais Comprados</Title>
                <Produtos>
                    <ButtonPrev><FaChevronLeft /></ButtonPrev>
                    {
                        dadosMaisComprados.map((produto) => {
                            return (
                                <Item>
                                    <ExibeProduto>
                                        <InfoProduto>
                                            <ImgProdutoItem src={ImgProduto} />
                                            <ProdutoNome>{produto.nome}</ProdutoNome>
                                            <ProdutoDe>{produto.de}</ProdutoDe>
                                            <ProdutoPor>{produto.por}</ProdutoPor>
                                            <ProdutoOu>{produto.ou}</ProdutoOu>
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
                            );
                        })
                    }
                    <ButtonNext><FaChevronRight /></ButtonNext>
                </Produtos>
            </MaisComprados>
            <BelezaESaude>
                <Title>Beleza e Saúde</Title>
                <Produtos>
                    <ButtonPrev><FaChevronLeft /></ButtonPrev>
                    {
                        dadosBelezaESaude.map((produto) => {
                            return (
                                <Item>
                                    <ExibeProduto>
                                        <InfoProduto>
                                            <ImgProdutoItem src={ImgProduto2} />
                                            <ProdutoNome>{produto.nome}</ProdutoNome>
                                            <ProdutoDe>{produto.de}</ProdutoDe>
                                            <ProdutoPor>{produto.por}</ProdutoPor>
                                            <ProdutoOu>{produto.ou}</ProdutoOu>
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
                            );
                        })
                    }
                    <ButtonNext><FaChevronRight /></ButtonNext>
                </Produtos>
            </BelezaESaude>
            <CategoriaEmDestaque>
                <Title>Categorias em destaque</Title>
                <Produtos>
                    <ProudutoEmDestaque>
                        <InfoProdutoEmDestaque>
                            <ImgProdutoEmDestaque src={ImgProduto} />
                        </InfoProdutoEmDestaque>
                        <TitleProdutoEmDestaque>Smartphones</TitleProdutoEmDestaque>
                    </ProudutoEmDestaque>
                    <ProudutoEmDestaque>
                        <InfoProdutoEmDestaque>
                            <ImgProdutoEmDestaque src={ImgProduto3} />
                        </InfoProdutoEmDestaque>
                        <TitleProdutoEmDestaque>Beleza e Saúde</TitleProdutoEmDestaque>
                    </ProudutoEmDestaque>
                    <ProudutoEmDestaque>
                        <InfoProdutoEmDestaque>
                            <ImgProdutoEmDestaque src={ImgProduto4} />
                        </InfoProdutoEmDestaque>
                        <TitleProdutoEmDestaque>Eletrodomésticos</TitleProdutoEmDestaque>
                    </ProudutoEmDestaque>
                    <ProudutoEmDestaque>
                        <InfoProdutoEmDestaque>
                            <ImgProdutoEmDestaque src={ImgProduto5} />
                        </InfoProdutoEmDestaque>
                        <TitleProdutoEmDestaque>Esporte e Lazer</TitleProdutoEmDestaque>
                    </ProudutoEmDestaque>
                    <ProudutoEmDestaque>
                        <InfoProdutoEmDestaque>
                            <ImgProdutoEmDestaque src={ImgProduto6} />
                        </InfoProdutoEmDestaque>
                        <TitleProdutoEmDestaque>Pet Shop</TitleProdutoEmDestaque>
                    </ProudutoEmDestaque>
                    <ExploreMais>Explore mais</ExploreMais>
                </Produtos>
            </CategoriaEmDestaque>
            <MaisAcessados>
                <Title>Mais Acessados</Title>
                <Produtos>
                    <ButtonPrev><FaChevronLeft /></ButtonPrev>
                    {
                        dadosMaisAcessados.map((produto) => {
                            return (
                                <Item>
                                    <ExibeProduto>
                                        <InfoProduto>
                                            <ImgProdutoItem src={ImgProduto} />
                                            <ProdutoNome>{produto.nome}</ProdutoNome>
                                            <ProdutoDe>{produto.de}</ProdutoDe>
                                            <ProdutoPor>{produto.por}</ProdutoPor>
                                            <ProdutoOu>{produto.ou}</ProdutoOu>
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
                            );
                        })
                    }
                    <ButtonNext><FaChevronRight /></ButtonNext>
                </Produtos>
            </MaisAcessados>
            <Footer />
        </Container>
    );
}

export default Principal;
