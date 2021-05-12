import React, {useState} from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import MenuIcon from '../MenuIcon';
import MenuList from '../MenuList';

interface MenusProps {
    open?: boolean;
}

const MenuContainer = styled.div`
    display: flex;
    flex: 1;
    & ${MenuIcon}{
        position: fixed;
        right: 17px;
        top: 8px;
    }
`

const Menus = styled.nav`
    background-color: var(--pma1);
    width: 200px;
    height: 100vh;
    position: fixed;
    z-index: 1;
    right: 0px;
    top: 0;
    transform: ${(props: MenusProps) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    transition: 0.3s;
    @media(min-width: 760px){
        .MenuProfile{
            display: none;
        }
        
    }
    @media(min-width: 960px){
        transform: none;
        background-color: transparent;
        display: flex;
        position: static;
        height: 100%;
        flex: 1;
        justify-content: space-between;
    }
`

export default function Menu() {

    const [open, setOpen] = useState(false);

    return (
        <MenuContainer>
            {!open &&
                <MenuIcon open={open} onClick={()=> setOpen(!open)}>
                    <FiMenu />
                </MenuIcon>
            }
            {open &&
                <MenuIcon open={open} onClick={()=> setOpen(!open)}>
                    <RiCloseFill />
                </MenuIcon>
            }
            <Menus open={open}>
                <MenuList>
                    <li><a href="/pesquisadores" className="MenuLink MenuProfile">Olá, tudo bem?</a></li>
                    <li><a className="MenuLink"><select name="" id=""><option value="">Todos os departamentos</option></select></a></li>
                    <li><a href="/principal" className="MenuLink">Venda no MarkPlace</a></li>
                    <li><a href="/principal" className="MenuLink">Ofertas do dia</a></li>
                    <li><a href="/principal" className="MenuLink">Eletrodomésticos</a></li>
                    <li><a href="/principal" className="MenuLink">Celulares</a></li>
                    <li><a href="/principal" className="MenuLink">Móveis</a></li>
                    <li><a href="/principal" className="MenuLink">Tv e Vídeo</a></li>
                    <li><a href="/principal" className="MenuLink">Informática</a></li>
                </MenuList>
            </Menus>
        </MenuContainer>
    );
}