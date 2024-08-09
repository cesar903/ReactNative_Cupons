import React from "react"
import { ScrollView, View, StatusBar, Button } from "react-native"
import { setStringAsync } from "expo-clipboard"
import Promocao from "./src/components/Promocao"

export default function App() {

  async function CopiarTexto() {
    await setStringAsync("Olá mundo!")
  }

  return <ScrollView>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="#fff" />
    <View>
      <Button
        title="Clique aqui para copiar!"
        onPress={CopiarTexto} />

      <Promocao
        titulo="Promoção Bermudas!"
        imagem={require("./src/data/bermuda.webp")}
        promocao={8}
        codigo="BERMA05" />

      <Promocao
        titulo="Promoção para Camisas"
        imagem={require("./src/data/camisa.jpg")}
        promocao={5}
        codigo="CAMISA07" />

      <Promocao
        titulo="DESCONTO Tenis!"
        imagem={require("./src/data/tenis.jpg")}
        promocao={10}
        codigo="TENISSHOES" />
    </View>
  </ScrollView>
}
