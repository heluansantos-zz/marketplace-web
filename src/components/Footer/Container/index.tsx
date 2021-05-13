import React from 'react';
import styled from 'styled-components';
import FooterContent from '../Content';

const FooterContainer = styled.footer`
    background-color: var(--footer);
    margin-top: 242px;
    @media(min-width: 768px) {
        display: flex;
        justify-content: center;
    }
`

export default function Footer(){
    return(
        <FooterContainer>
            <FooterContent />
        </FooterContainer>
    );
}