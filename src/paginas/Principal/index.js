import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import estilos from './estilos';

import api from "../../servicos/api"

export default function Principal({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState({});

    function BuscaUsuario() {
        api.get('/users').then(
            response => {
                console.log(response.data)
            }
        )
    }

    return (
        <ScrollView>
            <View style={estilos.container}>
                <>
                    <View style={estilos.fundo} />
                    <View style={estilos.imagemArea}>
                        <Image source={{ uri: 'https://avatars.githubusercontent.com/u/69737234?v=4' }} style={estilos.imagem} />
                    </View>
                    <Text style={estilos.textoNome}>Jean Santos</Text>
                    <Text style={estilos.textoEmail}>jeancbsan@gmail.com</Text>
                    <View style={estilos.seguidoresArea}>
                        <View style={estilos.seguidores}>
                            <Text style={estilos.seguidoresNumero}>290</Text>
                            <Text style={estilos.seguidoresTexto}>Seguidores</Text>
                        </View>
                        <View style={estilos.seguidores}>
                            <Text style={estilos.seguidoresNumero}>10</Text>
                            <Text style={estilos.seguidoresTexto}>Seguindo</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Repositorios')}>
                        <Text style={estilos.repositorios}>
                            Ver os repositórios
                        </Text>
                    </TouchableOpacity>
                </>

                <TextInput
                    placeholder="Busque por um usuário"
                    autoCapitalize="none"
                    style={estilos.entrada}
                />

                <TouchableOpacity style={estilos.botao} onPress={BuscaUsuario}>
                    <Text style={estilos.textoBotao}>
                        Buscar
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
