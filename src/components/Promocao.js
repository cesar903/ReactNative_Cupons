import React, { useState } from "react"
import { View, Text, ImageBackground, Pressable } from "react-native"
import { setStringAsync } from "expo-clipboard"
import estilo from "../styles/Promocao"


export default function Promocao(props) {

    const [estadoCodigo, mudarEstadoCodigo] = useState(false)

    async function AlterarEstado() {
        mudarEstadoCodigo(!estadoCodigo)
        await setStringAsync(props.codigo)
    }

    return <Pressable onPress={AlterarEstado}>
        {estadoCodigo &&
            <Text style={estilo.descontoTitulo}>
                {props.codigo}
            </Text>
        }
        <View style={estilo.desconto}>
            <Text> {props.titulo} </Text>
            <ImageBackground
                style={estilo.descontoImagem}
                source={props.imagem}>
                <Text style={estilo.descontoDados}> {props.promocao}% </Text>
            </ImageBackground>
            <Text style={estilo.descontoCodigo}> {props.codigo} </Text>
        </View>
    </Pressable>
}
