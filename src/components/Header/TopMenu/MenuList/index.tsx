import styled from 'styled-components';

const MenuList = styled.ul`
    list-style: none;
    margin-left: 3rem;
    margin-top: 3rem;
    .Ola{
        color: var(--C1);
        text-decoration: none;
        background-color: red;
        height: 10px;
        h5{
            font-size: 0.6rem;
            font-weight: normal;
            height: 18px;
        }
        p{
            font-size: 0.5rem;
        }
        
    }
    @media(min-width: 1215px){
        .Ola{
            h5{
                font-size: 1rem;
            }
            p{
                font-size: 0.8rem;
                margin-bottom: 5px;
            }

        }
        
    }
    input{
        width: 400px;
    }
    li{
        margin-bottom: 1rem;
        font-size: 1rem;
        color: var( --C1);
    }
    .MenuLink{
        color: var( --C1);
        text-decoration: none;
    }

    @media(min-width: 760px){
        display: flex;
        align-items: center;
        margin: 0;
        li {
            margin-left: 1rem; 
            margin-bottom: 0;
        }
        .MenuLink{
            color: var(--C1);
        }
    }
    
`

export default MenuList;