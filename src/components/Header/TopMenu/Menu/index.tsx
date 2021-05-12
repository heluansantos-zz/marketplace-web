import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '../MenuIcon';
import MenuList from '../MenuList';
import Favorito from '../Favorito';
import Sacola from '../Sacola';
import { AiOutlineSearch } from 'react-icons/ai';
interface MenusProps {
    open?: boolean;
}

const MenuContainer = styled.div`
    margin: 0 1.6rem;
    padding: 0 40px;
    display: flex;
    flex: 1;
    & ${MenuIcon}{
        position: fixed;
        right: 30px;
        top: 10px;
    }
`
const Search = styled.div`
    position: relative;
    display: flex;
    border: none;
    width: 650px;
    height: 2rem;
    margin-top: 3px;
    background-color: var(--pme1);
    border-radius: 13px;
    select{
        border: none;
        margin-top: 3px;
        height: 1.5rem;
        background-color: transparent;
        color: var(--C1);
        padding-left: 20px;
        outline: none;
        cursor: pointer;
    }
    input{
        padding-left: 20px;
        padding-right: 5px;
        width: 80%;
        border: none;
        background-color: transparent;
        outline: none;
        font-size: 1rem;
        color: var(--C1);
        ::placeholder{
            color: var(--C1);
        }
    }
    svg{
        position: absolute;
        left: 95%;
        height: 2rem;
        font-size: 1.3rem;
    }
`
const Menus = styled.nav`
    background-color: var(--pma1);
    width: 0;
    height: 100vh;
    position: fixed;
    z-index: 1;
    right: 0px;
    top: 0;
    
    @media(min-width: 760px){
        transform: none;
        background-color: transparent;
        display: flex;
        position: static;
        margin-top: 5px;;
        height: 100%;
        flex: 1;
        justify-content: space-between;
    }
`

export default function Menu() {

    const [open, setOpen] = useState(false);

    return (
        <MenuContainer>

            <Menus>
                <Search>
                    <select name="" id="">
                        <option value="">Todos</option>
                    </select>
                    <input type="text" placeholder="O que você está procurando?"/>
                    <AiOutlineSearch />
                </Search>
                <MenuList>
                    <li><a href="/pesquisadores" className="Ola"><h5> Olá, tudo bem?</h5> <p> entre ou cadastre-se</p></a></li>
                    <li><a href="/publicacoes" className="MenuLink"><Favorito /></a></li>
                    <li><a href="/projetos" className="MenuLink"><Sacola /></a></li>
                </MenuList>
            </Menus>
        </MenuContainer>
    );
}