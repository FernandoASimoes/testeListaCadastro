import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Circulo, BtnCirculo } from './style';

export default function Footer() {
    return (
        <Container>
            <Circulo>
                <BtnCirculo>
                    <Icon
                        name='add'
                        size={30}
                        color='#069'
                    />
                </BtnCirculo>
            </Circulo>
        </Container>
    );
}