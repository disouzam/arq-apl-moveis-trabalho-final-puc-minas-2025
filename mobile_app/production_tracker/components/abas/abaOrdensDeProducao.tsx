import { StyleSheet } from "react-native";

import {
  TipoOrdemDeProducao,
  EstadoOrdemDeProducao,
} from "@/components/OrdemDeProducao";
import ListaDeOrdensdeProducao from "@/components/ListaDeOrdensdeProducao";

export default function AbaOrdemDeProducao() {
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