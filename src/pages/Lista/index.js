import React from 'react';
import { Image, View } from 'react-native';

import { TextNome, Card, TextItem } from './style';

export default function Lista({ data }) {
    return (
        <Card>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextNome>{data.nome}</TextNome>
                <Image
                    source={data.img}
                    style={{ width: 60, height: 60, marginRight: 10, marginTop: 10 }}
                />
            </View>
            <TextItem>{data.cpf}</TextItem>
            <TextItem>{data.email}</TextItem>
            <TextItem>{data.telefone}</TextItem>
        </Card>
    );
}

