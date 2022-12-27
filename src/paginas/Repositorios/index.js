import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { buscarRepositorios } from '../../servicos/requisicoes/repositorios';
import estilos from './estilos';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const [nomeRepo, setNomeRepo] = useState('');
    const estaNaTela = useIsFocused();


    useEffect(() => {
        const loadData = async () => {
            const resultado = await buscarRepositorios(route.params.id)
            setRepo(resultado);
        }
        loadData();
    }, [estaNaTela])

    async function buscarRepositorio() {
        const resultado = await buscarRepositoriosPorNome(id, nomeRepo)
        setNomeRepo('')
        if (resultado) {
            setRepo(resultado);
        }
        else {
            Alert.alert("Repositório não encontrado!");
            setRepo({})
        }
    }


    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Busque por um repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nomeRepo}
                onChangeText={(texto) => setNomeRepo(texto)}
            />
            <TouchableOpacity 
            style={estilos.botao}
            onPress={() => navigation.navigate('Repositorios', { id: route.params.id })}>
                <Text style={estilos.textoBotao}>
                    Buscar Repositório
                </Text>
            </TouchableOpacity>
            <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
            <TouchableOpacity
                style={estilos.botao}
                onPress={() => navigation.navigate('CriarRepositorio', {id: route.params.id})}
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
