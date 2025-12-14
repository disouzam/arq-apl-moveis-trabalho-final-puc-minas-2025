import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet, Pressable } from "react-native";
import { TipoOrdemDeProducao } from "@/models/TipoOrdemDeProducao";

export default function OrdemDeProducao(ordemDeProducao: TipoOrdemDeProducao) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.ordemDeProducaoState}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        {ordemDeProducao.state}
      </Text>
      <Text
        style={styles.ordemDeProducaoId}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        {ordemDeProducao?.id}
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => alert(`Deu certo!: ${ordemDeProducao.id}`)}
      >
        <Text style={styles.buttonLabel}>Editar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    padding: 0,
    margin: 0,
    fontSize: 20,
  },
  ordemDeProducaoState: {
    flex: 5,
    paddingLeft: 15,
    margin: 0,
    color: "#000",
    verticalAlign: "middle"
  },
  ordemDeProducaoId: {
    flex: 5,
    paddingLeft: 15,
    margin: 0,
    color: "#000",
    verticalAlign: "middle"
  },
  button: {
    flex: 2,
    borderRadius: 0,
    padding: 15,
    margin: 0,
    alignItems: "center",
    verticalAlign: "middle",
    backgroundColor: "green",
  },
  buttonLabel: {
    color: "#000",
  },
});
