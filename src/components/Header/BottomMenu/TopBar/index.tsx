import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';
import Menu from '../Menu';

const TopBarContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--pma1);
    height: 2.5rem;
    @media(min-width: 760px){
        height: 2.2rem;
    }
`
const Search = styled.div`
    position: relative;
    display: flex;
    border: none;
    width: 300px;
    height: 2rem;
    margin-left: 20px;
    margin-top: 0px;
    background-color: var(--pme1);
    border-radius: 13px;
    select{
        border: none;
        margin-top: 3px;
        height: 1.5rem;
        background-color: transparent;
        color: var(--C1);
        padding-left: 20px;
        font-size: 0.7rem;
        outline: none;
        cursor: pointer;
    }
    input{
        padding-left: 2px;
        padding-right: 5px;
        width: 65%;
        border: none;
        background-color: transparent;
        outline: none;
        font-size: 0.8rem;
        color: var(--C1);
        ::placeholder{
            color: var(--C1);
        }
    }
    svg{
        position: absolute;
        left: 90%;
        height: 2rem;
        font-size: 1.3rem;
    }
    @media(min-width: 760px){
        display: none;
    }
`
export default function TopBar() {
    return (
        <TopBarContainer>
            <Search>
                <select name="" id="">
                    <option value="">Todos</option>
                </select>
                <input type="text" placeholder="O que você está procurando?" />
                <AiOutlineSearch />
            </Search>
            <Menu />
        </TopBarContainer>
    );
}