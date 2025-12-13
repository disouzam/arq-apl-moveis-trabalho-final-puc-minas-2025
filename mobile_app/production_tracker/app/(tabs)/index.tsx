import { StyleSheet } from "react-native";

import OrdemDeProducao, {
  EstadoOrdemDeProducao,
} from "@/components/OrdemDeProducao";
import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <OrdemDeProducao
        state={EstadoOrdemDeProducao.APROVADA}
        id={"1234567890"}
      />
      <OrdemDeProducao
        state={EstadoOrdemDeProducao.APROVADA}
        id={"1234567890"}
      />
      <OrdemDeProducao
        state={EstadoOrdemDeProducao.APROVADA}
        id={"1234567890"}
      />
      <OrdemDeProducao
        state={EstadoOrdemDeProducao.APROVADA}
        id={"1234567890"}
      />
      <OrdemDeProducao
        state={EstadoOrdemDeProducao.APROVADA}
        id={"1234567890"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
