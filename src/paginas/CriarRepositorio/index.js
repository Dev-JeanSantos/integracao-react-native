import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { criarRepositorio } from '../../servicos/requisicoes/repositorios';
import estilos from './estilos';

export default function CriarRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');

    async function criar() {
        const resultado = await criarRepositorio(
            route.params.id,
            nome,
            data,
        )
    
        if (resultado === 'Sucesso') {
            Alert.alert("Repositório criado com sucesso")
            navigation.goBack()
        }
        else {
    
            Alert.alert("Falha ao criar repositório")
            navigation.goBack()
        }
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity style={estilos.botao}onPress={criar}>
                <Text style={estilos.textoBotao}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
