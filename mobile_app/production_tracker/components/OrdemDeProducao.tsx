import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet, Pressable } from "react-native";
import { TipoOrdemDeProducao } from "@/models/TipoOrdemDeProducao";
import { EstadoOrdemDeProducao } from "@/models/enums/EstadoOrdemDeProducao";

export default function OrdemDeProducao(ordemDeProducao: TipoOrdemDeProducao) {
  const isButtonEnable = (estado: EstadoOrdemDeProducao) => {
    if (estado === EstadoOrdemDeProducao.PENDENTE){
      return false;
    }
    return true;
  }

  const buttonStyle = (estado: EstadoOrdemDeProducao) => {
    if (isButtonEnable(estado)){
      return styles.button;
    }
    return styles.inactiveButton;
  }

  const buttonLabel = (estado: EstadoOrdemDeProducao) => {
    switch (estado) {
      case EstadoOrdemDeProducao.APROVADA:
        return "Editar";
      case EstadoOrdemDeProducao.PENDENTE:
        return "Solicitar aprovação";
      case EstadoOrdemDeProducao.FINALIZADA:
        return "Visualizar";
      default:
        return "Estado inconsistente";
    }
  }

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
        style={buttonStyle(ordemDeProducao.state)}
        onPress={() => alert(`Deu certo!: ${ordemDeProducao.id}`)}
      >
        <Text style={styles.buttonLabel}>{buttonLabel(ordemDeProducao.state)}</Text>
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
    flex: 3,
    paddingLeft: 15,
    margin: 0,
    color: "#000",
    verticalAlign: "middle"
  },
  ordemDeProducaoId: {
    flex: 3,
    paddingLeft: 15,
    margin: 0,
    color: "#000",
    verticalAlign: "middle"
  },
  button: {
    flex: 6,
    borderRadius: 0,
    padding: 15,
    margin: 0,
    alignItems: "flex-start",
    verticalAlign: "middle",
    backgroundColor: "green",
  },
  inactiveButton: {
    flex: 6,
    borderRadius: 0,
    padding: 15,
    margin: 0,
    alignItems: "flex-start",
    verticalAlign: "middle",
    backgroundColor: "red",
  },
  buttonLabel: {
    color: "#000",
  },
});
