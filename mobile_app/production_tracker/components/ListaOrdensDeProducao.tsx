import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";

type TipoOrdemDeProducao = {
  id: string;
};

export default function ListaOrdensDeProducao(
  ordemDeProducao: TipoOrdemDeProducao
) {
  return (
    <View>
      <Text
        style={styles.ordemDeProducao}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        &#123;numero da ordem de producao&#125;:{ordemDeProducao?.id}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ordemDeProducao: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "left",
  },
});
