//Johelin Pascual Perez Valdez 2022-1131
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function NumberComparison() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [results, setResults] = useState({ max: "", min: "", avg: "" });

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      alert("Por favor ingresa tres numeros validos");
      return;
    }

    const max = Math.max(n1, n2, n3);
    const min = Math.min(n1, n2, n3);
    const avg = ((n1 + n2 + n3) / 3).toFixed(2);

    setResults({ max, min, avg });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Ingresa 3 numeros </Text>

      <TextInput
        style={styles.input}
        placeholder="Numero 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Numero 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <TextInput
        style={styles.input}
        placeholder="Numero 1"
        keyboardType="numeric"
        value={num3}
        onChangeText={setNum3}
      />

      <Button title="calcular" onPress={calculate} color="#FF6F61" />

      {results.max !== "" && (
        <View style={styles.results}>
          <Text>Mayor: {results.max}</Text>
          <Text>Menor: {results.min}</Text>
          <Text>Promedio: {results.avg}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F0F8FF",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FF6F61",
  },

  input: {
    height: 50,
    borderColor: "#FF6F61",
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "80%",
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
  results: {
    marginTop: 20,
    alignItems: "center",
  },
});
