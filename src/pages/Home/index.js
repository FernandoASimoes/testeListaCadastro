import React, { useState } from 'react';
import { Image, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Lista from '../Lista';
import Add from '../Footer';

console.disableYellowBox="true";
import { Container, List } from './style';

export default function Home() {
    const [cadastros, setCadastros] = useState([
        {
            key: '1',
            nome: 'Sergio',
            cpf: '111.111.111-11',
            email: 'sergio@gmail.com',
            img: `${require('../../assets/sergio.jpg')}`,
            telefone: '(21) 91111-1111'
        },
        {
            key: '2',
            nome: 'Raquel',
            cpf: '222.222.222-22',
            email: 'raquel@gmail.com',
            img: `${require('../../assets/raquel.jpg')}`,
            telefone: '(21) 92222-2222'
        },
        {
            key: '3',
            nome: 'Jorge',
            cpf: '333.333.333-33',
            email: 'jorge@gmail.com',
            img: `${require('../../assets/jorge.png')}`,
            telefone: '(21) 93333-3333'
        },
        {
            key: '4',
            nome: 'Maria',
            cpf: '444.444.444-44',
            email: 'maria@gmail.com',
            img: `${require('../../assets/maria.jpg')}`,
            telefone: '(21) 94444-4444'
        },
        {
            key: '5',
            nome: 'Tulio',
            cpf: '555.555.555-55',
            email: 'tulio@gmail.com',
            img: `${require('../../assets/tulio.jpg')}`,
            telefone: '(21) 95555-5555'
        },
    ]);

    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ flex: 1 }} >
            <Container>
                <List
                    showsVerticalScrollIndicator={false}
                    data={cadastros}
                    keyExtractor={ item => item.key }
                    renderItem={({ item }) => <Lista data={ item } />}
                />
            </Container>

            <Add />

        </LinearGradient>
    );
}

