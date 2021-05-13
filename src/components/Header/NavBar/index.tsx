import React from 'react';
import TopMenu from '../TopMenu/TopBar';
import BottomMenu from '../BottomMenu/TopBar';
import {
    NavBarContainer
}from './styles';

const NavBar: React.FC = () =>{
    return(
        <NavBarContainer>
            <TopMenu />
            <BottomMenu />
        </NavBarContainer>
    );
}
export default NavBar;