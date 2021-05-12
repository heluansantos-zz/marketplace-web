import styled from 'styled-components';
import favorito from '../../../../images/favoritos.png';

const Favorito = styled.img.attrs({src: favorito, alt: "Seus Favoritos"})`
    height: 2rem;
    margin-left: 30px;
    @media(max-width: 1215px){
        margin-left: 0px;
    }
`

export default Favorito;