import { View, Text } from "react-native";
import { apontamentoEstilos } from "@/styles/apontamentoEstilos";
import { DadosOrdemDeProducao } from "@/models/DadosOrdemDeProducao";

type Props = {
  idDoCampo: keyof DadosOrdemDeProducao;
  label: string;
  dados: DadosOrdemDeProducao;
  indexEtapa?: number;
};

export default function CampoApontamento(props: Props) {

  const valor = Reflect.get(props.dados, props.idDoCampo);
  console.log(`${props.idDoCampo}: ${valor}: ${typeof valor}`)

  return (
    <View style={apontamentoEstilos.row}>
      <Text style={apontamentoEstilos.label}>{props.label}</Text>
      <Text style={apontamentoEstilos.dataOrAction}>{valor?.toString()}</Text>
    </View>
  );
}
