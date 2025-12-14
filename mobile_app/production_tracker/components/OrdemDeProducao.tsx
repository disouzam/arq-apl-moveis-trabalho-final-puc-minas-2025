import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet, Pressable } from "react-native";
import { TipoOrdemDeProducao } from "@/models/TipoOrdemDeProducao";
import { EstadoOrdemDeProducao } from "@/models/enums/EstadoOrdemDeProducao";
import Colors from "@/constants/Colors";
import { useColorScheme } from "./useColorScheme";

export default function OrdemDeProducao(ordemDeProducao: TipoOrdemDeProducao) {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      height: 50,
      padding: 0,
      margin: 5,
      fontSize: 20,
    },
    ordemDeProducaoState: {
      flex: 3,
      paddingLeft: 15,
      margin: 0,
      color: "#000",
      verticalAlign: "middle",
    },
    ordemDeProducaoId: {
      flex: 4,
      paddingLeft: 15,
      margin: 0,
      color: "#000",
      verticalAlign: "middle",
    },
    button: {
      flex: 5,
      borderRadius: 20,
      padding: 15,
      margin: 0,
      alignItems: "center",
      verticalAlign: "middle",
      backgroundColor: "yellow",
    },
    buttonLabel: {
      color: "#000",
      fontWeight: "bold",
    },
  });

  const isButtonEnabled = (estado: EstadoOrdemDeProducao) => {
    if (estado === EstadoOrdemDeProducao.PENDENTE) {
      return false;
    }
    return true;
  };

  const buttonStyle = (estado: EstadoOrdemDeProducao) => {
    if (isButtonEnabled(estado)) {
      return [
        styles.button,
        {
          backgroundColor: Colors[colorScheme ?? "light"].tint,
        },
      ];
    }
    return [
      styles.button,
      {
        backgroundColor: Colors[colorScheme ?? "light"].tabIconDefault,
      },
    ];
  };

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
  };

  const onPress = (estado: EstadoOrdemDeProducao) => {
    switch (estado) {
      case EstadoOrdemDeProducao.APROVADA:
        return () => alert(`Editar ordem aprovada: ${ordemDeProducao.id}`);
      case EstadoOrdemDeProducao.PENDENTE:
        return () =>
          alert(`Solicitar aprovação da ordem: ${ordemDeProducao.id}`);
      case EstadoOrdemDeProducao.FINALIZADA:
        return () => alert(`Visualizar apontamentos: ${ordemDeProducao.id}`);
      default:
        return () => alert(`Estado inconsistente!`);
    }
  };

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
        onPress={onPress(ordemDeProducao.state)}
      >
        <Text style={styles.buttonLabel}>
          {buttonLabel(ordemDeProducao.state)}
        </Text>
      </Pressable>
    </View>
  );
}
