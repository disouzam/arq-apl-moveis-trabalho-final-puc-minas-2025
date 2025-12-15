import Colors from "@/constants/Colors";
import { View, Text, Pressable, useColorScheme } from "react-native";
import { apontamentoEstilos } from "@/styles/apontamentoEstilos";
import { DadosOrdemDeProducao } from "@/models/DadosOrdemDeProducao";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useState } from "react";
import { ordemDeProducaoEstilos } from "@/styles/OrdemDeProducaoEstilos";

type Props = {
  dados: DadosOrdemDeProducao;
  indexEtapa?: number;
};

enum TipoData {
  INICIAL,
  FINAL,
}

export default function CampoApontamento(props: Props) {
  debugger;
  const [dadosLocais, setDadosLocais] = useState<DadosOrdemDeProducao>(
    props.dados
  );
  const INITIAL_INDEX = -1;
  const [index, setIndex] = useState<number>(INITIAL_INDEX);

  if (props.indexEtapa !== undefined && index === INITIAL_INDEX) {
    setIndex(props.indexEtapa);
  }

  const [numeroEtapas, setNumeroEtapas] = useState<number>(
    dadosLocais.etapa.length
  );
  const [numeroInicioRegistrado, setNumeroInicioRegistrado] = useState<number>(
    dadosLocais.inicio.length
  );
  const [numeroFinalRegistrado, setNumeroFinalRegistrado] = useState<number>(
    dadosLocais.final.length
  );

  const colorScheme = useColorScheme();

  const buttonStyles = [
    ordemDeProducaoEstilos.button,
    {
      backgroundColor: Colors[colorScheme ?? "light"].tint,
    },
  ];

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: "date" | "time", currentDate) => {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatePickerDataFinal = () => {
    console.warn(dadosLocais);
    showDatepickerGenerico(TipoData.FINAL);
    console.warn(dadosLocais);
  };

  const showDatepickerGenerico = (tipoData: TipoData) => {
    if (
      index !== INITIAL_INDEX ||
      numeroInicioRegistrado == 0 ||
      numeroFinalRegistrado == 0
    ) {
      if (tipoData === TipoData.INICIAL && numeroInicioRegistrado == 0) {
        const inserirDataAtual = (dadosPrevios: DadosOrdemDeProducao) => {
          const inicio = [...dadosPrevios.inicio];
          inicio.push(new Date());

          return {
            ...dadosPrevios,
            inicio: [...inicio],
          };
        };
        const novosDadosLocais = inserirDataAtual(dadosLocais);
        setDadosLocais(novosDadosLocais);
      }

      if (tipoData === TipoData.FINAL && numeroFinalRegistrado == 0) {
        const inserirDataAtual = (dadosPrevios: DadosOrdemDeProducao) => {
          const final = [...dadosPrevios.final];
          final.push(new Date());

          return {
            ...dadosPrevios,
            final: [...final],
          };
        };
        const novosDadosLocais = inserirDataAtual(dadosLocais);
        setDadosLocais(novosDadosLocais);
      }

      setIndex(0);
    }

    switch (tipoData) {
      case TipoData.INICIAL:
        showMode("date", dadosLocais.inicio[index]);
        break;
      case TipoData.FINAL:
        showMode("date", dadosLocais.final[index]);
        break;
      default:
        break;
    }
  };

  //   const showTimepicker = () => {
  //     showMode("time");
  //   };

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
        {index !== INITIAL_INDEX && numeroEtapas > 0 ? (
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
        {index !== INITIAL_INDEX && numeroInicioRegistrado > 0 ? (
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
        {index !== INITIAL_INDEX && numeroFinalRegistrado > 0 ? (
          <Text style={apontamentoEstilos.dataOrAction}>
            {dadosLocais.final[index].toISOString()}
          </Text>
        ) : (
          <Pressable style={buttonStyles} onPress={showDatePickerDataFinal}>
            <Text style={ordemDeProducaoEstilos.buttonLabel}>
              Selecione a data
            </Text>
          </Pressable>
        )}
      </View>
    </>
  );
}
