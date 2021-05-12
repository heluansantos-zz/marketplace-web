import styled from 'styled-components';
import logo from '../../../../images/logo.png';

const Logo = styled.img.attrs({src: logo, alt: "Logo do Lis"})`
    height: 1.5rem;
    width: 9rem;
    margin-left: 1.6rem;
    @media(max-width: 760px){
        height: 1.3rem;
        margin-right: 1.6rem;
    }
`

export default Logo;