//Johelin Pascual Perez Valdez 2022-1131
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const TablaMultiplicar = () => {
  const [numero, setNumero] = useState("");
  const [tabla, setTabla] = useState([]);

  const GenerarTabla = () => {
    const num = parseInt(numero);
    if (!isNaN(num)) {
      const nuevaTabla = [];
      for (let i = 1; i <= 14; i++) {
        nuevaTabla.push(`${num} x ${i} = ${num * i}`);
      }
      setTabla(nuevaTabla);
    } else {
      setTabla([]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabla de Multiplicar</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa un numero"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />
      <Button title="Generar Tabla" onPress={GenerarTabla} color="#FF6F61" />
      <ScrollView style={styles.resultContainer}>
        {tabla.map((item, index) => (
          <Text key={index} style={styles.result}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F0F8FF",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FF6F61",
  },
  input: {
    height: 50,
    borderColor: "#FF6F61",
    marginBottom: 10,
    borderWidth: 2,
    paddingHorizontal: 10,
    width: "80%",
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
  resultContainer: {
    marginTop: 20,
    width: "100%",
  },
  result: {
    fontSize: 20,
    textAlign: "center",
    color: "#4CAF50",
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default TablaMultiplicar;
