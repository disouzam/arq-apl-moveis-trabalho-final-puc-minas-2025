import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet, Pressable } from "react-native";
import { TipoOrdemDeProducao } from "@/models/TipoOrdemDeProducao";
import { EstadoOrdemDeProducao } from "@/models/enums/EstadoOrdemDeProducao";
import Colors from "@/constants/Colors";
import { useColorScheme } from "./useColorScheme";
import { ordemDeProducaoEstilos } from "@/styles/OrdemDeProducaoEstilos";

export default function OrdemDeProducao(ordemDeProducao: TipoOrdemDeProducao) {
  const colorScheme = useColorScheme();

  const isButtonEnabled = (estado: EstadoOrdemDeProducao) => {
    if (estado === EstadoOrdemDeProducao.PENDENTE) {
      return false;
    }
    return true;
  };

  const buttonStyle = (estado: EstadoOrdemDeProducao) => {
    if (isButtonEnabled(estado)) {
      return [
        ordemDeProducaoEstilos.button,
        {
          backgroundColor: Colors[colorScheme ?? "light"].tint,
        },
      ];
    }
    return [
      ordemDeProducaoEstilos.button,
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
    <View style={ordemDeProducaoEstilos.container}>
      <Text
        style={ordemDeProducaoEstilos.ordemDeProducaoState}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        {ordemDeProducao.state}
      </Text>
      <Text
        style={ordemDeProducaoEstilos.ordemDeProducaoId}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        {ordemDeProducao?.id}
      </Text>
      <Pressable
        style={buttonStyle(ordemDeProducao.state)}
        onPress={onPress(ordemDeProducao.state)}
      >
        <Text style={ordemDeProducaoEstilos.buttonLabel}>
          {buttonLabel(ordemDeProducao.state)}
        </Text>
      </Pressable>
    </View>
  );
}
