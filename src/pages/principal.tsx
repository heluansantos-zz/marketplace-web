import React from 'react';
import Head from 'next/head';
import NavBar from '../components/Header/NavBar';
import Footer from '../components/Footer/Container';
import {
    Container
} from '../styles/pages/principal';
const Principal: React.FC = () => {

    return (
        <Container>
            <Head>
                <title>Tela Inicial</title>
            </Head>
            <NavBar />
            <Footer />
        </Container>
    );
}

export default Principal;
