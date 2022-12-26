import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { buscarRepositorios } from '../../servicos/requisicoes/repositorios';
import estilos from './estilos';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const estaNaTela = useIsFocused();

    useEffect(() => {
        const loadData = async () => {
            const resultado = await buscarRepositorios(route.params.id)
            setRepo(resultado);
        }
        loadData();
    }, [estaNaTela])

    return (
        <View style={estilos.container}>
            <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
            <TouchableOpacity
                style={estilos.botao}
                onPress={() => navigation.navigate('CriarRepositorio')}
            >
                <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
            </TouchableOpacity>
            <FlatList
                data={repo}
                style={{ width: '100%' }}
                keyExtractor={repo => repo.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={estilos.repositorio}
                        onPress={() => navigation.navigate('InfoRepositorio', { item })}
                    >
                        <Text style={estilos.repositorioNome}>{item.name}</Text>
                        <Text style={estilos.repositorioData}>Atualizado em {item.data}</Text>

                    </TouchableOpacity>
                )}
            >

            </FlatList>
        </View>
    );
}
