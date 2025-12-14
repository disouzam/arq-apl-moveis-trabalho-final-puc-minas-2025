import { View, Text } from "react-native";
import { apontamentoEstilos } from "@/styles/apontamentoEstilos";
import { DadosOrdemDeProducao } from "@/models/DadosOrdemDeProducao";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

type Props = {
  dados: DadosOrdemDeProducao;
  indexEtapa?: number;
};

export default function CampoApontamento(props: Props) {
  const [dadosLocais, setDadosLocais] = useState<DadosOrdemDeProducao>(
    props.dados
  );
  let index: number | undefined;

  if (props.indexEtapa === undefined) {
    index = undefined;
  } else {
    index = props.indexEtapa;
  }

  const numeroEtapas = dadosLocais.etapa.length;
  const numeroInicioRegistrado = dadosLocais.inicio.length;
  const numeroFinalRegistrado = dadosLocais.final.length;

  return (
    <>
      <View style={apontamentoEstilos.row}>
        <Text style={apontamentoEstilos.label}>Ordem de Produção</Text>
        <Text style={apontamentoEstilos.dataOrAction}>
          {dadosLocais.idDaOrdemDeProducao}
        </Text>
      </View>

      {index !== undefined && numeroEtapas > 0 ? (
        <View style={apontamentoEstilos.row}>
          <Text style={apontamentoEstilos.label}>Etapa</Text>
          <Text style={apontamentoEstilos.dataOrAction}>
            {dadosLocais.etapa[index]}
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
            {dadosLocais.inicio[index].toISOString()}
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
          <Text style={apontamentoEstilos.label}>Final</Text>
          <Text style={apontamentoEstilos.dataOrAction}>
            {dadosLocais.final[index].toISOString()}
          </Text>
        </View>
      ) : (
        <View style={apontamentoEstilos.row}>
          <Text style={apontamentoEstilos.label}>Final</Text>
          {/* <DateTimePicker mode="date" value={new Date()} /> */}
        </View>
      )}
    </>
  );
}
