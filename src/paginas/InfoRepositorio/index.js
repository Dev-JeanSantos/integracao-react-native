import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { atualizarRepositorios, deletarRepositorio } from '../../servicos/requisicoes/repositorios';
import estilos from './estilos';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);

    async function salvar() {
        const resultado = await atualizarRepositorios(
            route.params.item.postId,
            nome,
            data,
            route.params.item.id
        )

        if (resultado === 'Sucesso') {
            Alert.alert("Repositório atualizado com sucesso")
            navigation.goBack()
        }
        else {

            Alert.alert("Falha ao atualizar repositório")
            navigation.goBack()
        }
    }

    async function deletar() {
        const resultado = await deletarRepositorio(route.params.item.id)

        if (resultado === 'Sucesso') {
            Alert.alert("Repositório deletado com sucesso")
            navigation.goBack()
        }
        else {

            Alert.alert("Falha ao deletar repositório")
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
            <TouchableOpacity
                style={estilos.botao}
                onPress={salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[estilos.botao, { backgroundColor: '#DD2B2B', marginTop: 10 }]}
            >
                <Text style={estilos.textoBotao} onPress={deletar}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
