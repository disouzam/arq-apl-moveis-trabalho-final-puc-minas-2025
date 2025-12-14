import Colors from "@/constants/Colors";
import { View, Text, Pressable, useColorScheme } from "react-native";
import { apontamentoEstilos } from "@/styles/apontamentoEstilos";
import { DadosOrdemDeProducao } from "@/models/DadosOrdemDeProducao";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { ordemDeProducaoEstilos } from "@/styles/OrdemDeProducaoEstilos";

type Props = {
  dados: DadosOrdemDeProducao;
  indexEtapa?: number;
};

export default function CampoApontamento(props: Props) {
  const colorScheme = useColorScheme();

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
      <View style={apontamentoEstilos.row}>
        <Text style={apontamentoEstilos.label}>Etapa</Text>
        {index !== undefined && numeroEtapas > 0 ? (
          <Text style={apontamentoEstilos.dataOrAction}>
            {dadosLocais.etapa[index]}
          </Text>
        ) : (
          <Text style={apontamentoEstilos.dataOrAction}>
            Sem etapa registrada
          </Text>
        )}
      </View>
      <View style={apontamentoEstilos.row}>
        <Text style={apontamentoEstilos.label}>Início</Text>
        {index !== undefined && numeroInicioRegistrado > 0 ? (
          <Text style={apontamentoEstilos.dataOrAction}>
            {dadosLocais.inicio[index].toISOString()}
          </Text>
        ) : (
          <Text style={apontamentoEstilos.dataOrAction}>
            Sem registro de horário de início
          </Text>
        )}
      </View>
      <View style={apontamentoEstilos.row}>
        <Text style={apontamentoEstilos.label}>Final</Text>
        {index !== undefined && numeroFinalRegistrado > 0 ? (
          <Text style={apontamentoEstilos.dataOrAction}>
            {dadosLocais.final[index].toISOString()}
          </Text>
        ) : (
          <Pressable
            style={[
              ordemDeProducaoEstilos.button,
              {
                backgroundColor: Colors[colorScheme ?? "light"].tint,
              },
            ]}
            onPress={() => alert()}
          >
            <Text style={ordemDeProducaoEstilos.buttonLabel}>
              Selecione a data
            </Text>
          </Pressable>
        )}
      </View>
    </>
  );
}
