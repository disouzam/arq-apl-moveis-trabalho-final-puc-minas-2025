import { StyleSheet } from "react-native";

import OrdemDeProducao, {
  TipoOrdemDeProducao,
  EstadoOrdemDeProducao,
} from "@/components/OrdemDeProducao";
import { Text, View } from "@/components/Themed";
import ListaDeOrdensdeProducao from "@/components/ListaDeOrdensdeProducao";

export default function TabOneScreen() {
  const dados: TipoOrdemDeProducao[] = [
    {
      id: "1234567890",
      state: EstadoOrdemDeProducao.APROVADA,
    },
    {
      id: "1234567891",
      state: EstadoOrdemDeProducao.APROVADA,
    },
    {
      id: "1234567892",
      state: EstadoOrdemDeProducao.APROVADA,
    },
    {
      id: "1234567893",
      state: EstadoOrdemDeProducao.APROVADA,
    },
    {
      id: "1234567894",
      state: EstadoOrdemDeProducao.APROVADA,
    },
    {
      id: "1234567895",
      state: EstadoOrdemDeProducao.APROVADA,
    },
  ];

  return <ListaDeOrdensdeProducao ordens={dados}></ListaDeOrdensdeProducao>;
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
