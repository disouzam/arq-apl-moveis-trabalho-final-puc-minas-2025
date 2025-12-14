import { View, Text } from "react-native";
import { apontamentoEstilos } from "@/styles/apontamentoEstilos";
import { DadosOrdemDeProducao } from "@/models/DadosOrdemDeProducao";

type Props = {
  dados: DadosOrdemDeProducao;
  indexEtapa?: number;
};

export default function CampoApontamento(props: Props) {
  let index: number | undefined;

  if (props.indexEtapa === undefined) {
    index = undefined;
  } else {
    index = props.indexEtapa;
  }

  const numeroEtapas = props.dados.etapa.length;
  const numeroInicioRegistrado = props.dados.inicio.length;
  const numeroFinalRegistrado = props.dados.final.length;

  return (
    <>
      <View style={apontamentoEstilos.row}>
        <Text style={apontamentoEstilos.label}>Ordem de Produção</Text>
        <Text style={apontamentoEstilos.dataOrAction}>
          {props.dados.idDaOrdemDeProducao}
        </Text>
      </View>

      {index !== undefined && numeroEtapas > 0 ? (
        <View style={apontamentoEstilos.row}>
          <Text style={apontamentoEstilos.label}>Etapa</Text>
          <Text style={apontamentoEstilos.dataOrAction}>
            {props.dados.etapa[index]}
          </Text>
        </View>
      ) : (
        <View style={apontamentoEstilos.row}>
          <Text style={apontamentoEstilos.label}>Etapa</Text>
          <Text style={apontamentoEstilos.dataOrAction}>
            Sem etapa registrada
          </Text>
        </View>
      )}
      {index !== undefined && numeroInicioRegistrado > 0 ? (
        <View style={apontamentoEstilos.row}>
          <Text style={apontamentoEstilos.label}>Início</Text>
          <Text style={apontamentoEstilos.dataOrAction}>
            {props.dados.inicio[index].toISOString()}
          </Text>
        </View>
      ) : (
        <View style={apontamentoEstilos.row}>
          <Text style={apontamentoEstilos.label}>Início</Text>
          <Text style={apontamentoEstilos.dataOrAction}>
            Sem registro de horário de início
          </Text>
        </View>
      )}
      {index !== undefined && numeroFinalRegistrado > 0 ? (
        <View style={apontamentoEstilos.row}>
          <Text style={apontamentoEstilos.label}>Início</Text>
          <Text style={apontamentoEstilos.dataOrAction}>
            {props.dados.final[index].toISOString()}
          </Text>
        </View>
      ) : (
        <View style={apontamentoEstilos.row}>
          <Text style={apontamentoEstilos.label}>Início</Text>
          <Text style={apontamentoEstilos.dataOrAction}>
            Sem registro de horário de final
          </Text>
        </View>
      )}
    </>
  );
}
