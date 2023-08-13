import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [entradaReal, setEntradaReal] = useState("");
  const [saidaDolar, setSaidaDolar] = useState("");
  const [entradaDolar, setEntradaDolar] = useState("");
  const [saidaReal, setSaidaReal] = useState("");
  const [entradaRealEuro, setRealEuro] = useState("");
  const [saidaEuro, setSaidaEuro] = useState("");
  const [entradaDolarEuro, setDolarEuro] = useState("");
  const [saidaEuroDolar, setEuroDolar] = useState("");
  function converterR_D() {
    let dolar = Number(entradaReal) / 4.87;
    setSaidaDolar(dolar.toFixed(2));
  }

  function converterD_R() {
    let real = Number(entradaDolar) * 4.87;
    setSaidaReal(real);
  }
  function converterR_E() {
    let euro = Number(entradaRealEuro) / 5.37;
    setSaidaEuro(euro.toFixed(2));
  }
  function converterD_E() {
    let dolarEuro = Number(entradaDolarEuro) * 0.91;
    setEuroDolar(dolarEuro.toFixed(2));
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textoH1}>Conversores</Text>
        <View style={styles.card}>
          <Text style={styles.textCard}>Real para Dolar</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEntradaReal}
            value={entradaReal}
          />
          <TouchableOpacity style={styles.botao} onPress={converterR_D}>
            <Text style={styles.textoBotao}>Calcular</Text>
          </TouchableOpacity>
          <Text>U${saidaDolar}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textCard}>Dolar para Real</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEntradaDolar}
            value={entradaDolar}
          />
          <TouchableOpacity style={styles.botao} onPress={converterD_R}>
            <Text style={styles.textoBotao}>Calcular</Text>
          </TouchableOpacity>
          <Text>R${saidaReal}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textCard}>Real para Euro</Text>
          <TextInput
            style={styles.input}
            onChangeText={setRealEuro}
            value={entradaRealEuro}
          />
          <TouchableOpacity style={styles.botao} onPress={converterR_E}>
            <Text style={styles.textoBotao}>Calcular</Text>
          </TouchableOpacity>
          <Text>R${saidaEuro}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textCard}>Dolar para Euro</Text>
          <TextInput
            style={styles.input}
            onChangeText={setDolarEuro}
            value={entradaDolarEuro}
          />
          <TouchableOpacity style={styles.botao} onPress={converterD_E}>
            <Text style={styles.textoBotao}>Calcular</Text>
          </TouchableOpacity>
          <Text>R${saidaEuroDolar}</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#4682B4",
    alignItems: "center",
    justifyContent: "center",
  },
  textoH1: {
    fontSize: 50,
    margin: 10,
  },
  card: {
    width: "95%",
    height: 200,
    backgroundColor: "#B0C4DE",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
  },
  input: {
    borderWidth: 2,
    width: 80,
    backgroundColor: "#D3D3D3",
    padding: 5,
  },
  botao: {
    marginTop: 15,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  textCard: {
    fontSize: 17,
  }
});
