import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Menu from '../Menu';
import Favorito from '../Favorito';
import Sacola from '../Sacola';

const TopBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--p);
    height: 3rem;
    width: 100%;

    .ulmenu{
        display: none;
    }

    @media(max-width: 760px){
        .ulmenu{
            display: flex;
            min-width: 180px;
            padding-left: 10px;
            li{
                margin-left: 10px;
                list-style: none;
            }
        }
    }
`

export default function TopBar() {
    return (
        <TopBarContainer>
            <Logo />
            <ul className="ulmenu">
                <li><Favorito /></li>
                <li><Sacola /></li>
            </ul>
            <Menu />
        </TopBarContainer>
    );
}