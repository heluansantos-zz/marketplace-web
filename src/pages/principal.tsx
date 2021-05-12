import React from 'react';
import Head from 'next/head';
import TopMenu from '../components/Header/TopMenu/TopBar';
import BottomMenu from '../components/Header/BottomMenu/TopBar';

import {
    Container
} from '../styles/pages/principal';
const Principal: React.FC = () => {

    return (
        <Container>
            <Head>
                <title>Tela Inicial</title>
            </Head>
            <TopMenu />
            <BottomMenu />
        </Container>
    );
}

export default Principal;
