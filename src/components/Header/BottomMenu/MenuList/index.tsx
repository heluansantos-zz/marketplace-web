import styled from 'styled-components';

const MenuList = styled.ul`
    list-style: none;
    margin-left: 1rem;
    margin-top: 3rem;

    li{
        margin-bottom: 1rem;
        font-size: 0.7rem;
        color: var( --C1);
    }
    .MenuLink{
        color: var( --C1);
        text-decoration: none;
    }
    select{
       background-color: transparent;
       border: none;
       outline: none;
       color: var(--C1);
       cursor: pointer;
       font-size: 0.7rem; 
    }
    @media(min-width: 960px){
        display: flex;
        margin: 0;
        li {
            margin-left: 2rem; 
            margin-bottom: 0;
        }
        .MenuLink{
            color: var(--C1);
        }
    }
    @media(min-width: 1105px){    
        li {
            font-size: 15px;
        }
        select{
            font-size: 15px;
        }
    }
`

export default MenuList;