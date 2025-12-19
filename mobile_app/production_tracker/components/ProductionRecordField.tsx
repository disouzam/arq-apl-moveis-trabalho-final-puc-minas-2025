import Colors from "@/constants/Colors";
import { View, Text, Pressable, useColorScheme } from "react-native";
import { productionRecordStyles } from "@/styles/productionRecordStyles";
import { ProductionOrderData } from "@/models/ProductionOrderData";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useState } from "react";
import { productionOrderStyles } from "@/styles/productionOrderStyles";

type Props = {
  data: ProductionOrderData;
  productionStepIndex?: number;
};

enum DateType {
  START,
  END,
}

export default function ProductionRecordField(props: Props) {
  debugger;
  const [localData, setLocalData] = useState<ProductionOrderData>(
    props.data
  );
  const INITIAL_INDEX = -1;
  const [index, setIndex] = useState<number>(INITIAL_INDEX);

  if (props.productionStepIndex !== undefined && index === INITIAL_INDEX) {
    setIndex(props.productionStepIndex);
  }

  const [numberOfProductionSteps, setNumberOfProductionSteps] = useState<number>(
    localData.step.length
  );
  const [countOfInitialDateRecorded, setCountOfInitialDateRecorded] = useState<number>(
    localData.start.length
  );
  const [countOfFinalDateRecorded, setCountOfFinalDateRecorded] = useState<number>(
    localData.end.length
  );

  const colorScheme = useColorScheme();

  const buttonStyles = [
    productionOrderStyles.button,
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

  const showDatePickerForEndDate = () => {
    console.warn(localData);
    showGenericDatepicker(DateType.END);
    console.warn(localData);
  };

  const showGenericDatepicker = (dateType: DateType) => {
    if (
      index !== INITIAL_INDEX ||
      countOfInitialDateRecorded == 0 ||
      countOfFinalDateRecorded == 0
    ) {
      if (dateType === DateType.START && countOfInitialDateRecorded == 0) {
        const insertCurrentDate = (prev: ProductionOrderData) => {
          const start = [...prev.start];
          start.push(new Date());

          return {
            ...prev,
            inicio: [...start],
          };
        };
        const newLocalData = insertCurrentDate(localData);
        setLocalData(newLocalData);
      }

      if (dateType === DateType.END && countOfFinalDateRecorded == 0) {
        const insertCurrentDate = (prev: ProductionOrderData) => {
          const end = [...prev.end];
          end.push(new Date());

          return {
            ...prev,
            final: [...end],
          };
        };
        const newLocalData = insertCurrentDate(localData);
        setLocalData(newLocalData);
      }

      setIndex(0);
    }

    switch (dateType) {
      case DateType.START:
        showMode("date", localData.start[index]);
        break;
      case DateType.END:
        showMode("date", localData.end[index]);
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
      <View style={productionRecordStyles.row}>
        <Text style={productionRecordStyles.label}>Ordem de Produção</Text>
        <Text style={productionRecordStyles.dataOrAction}>
          {localData.id}
        </Text>
      </View>
      <View style={productionRecordStyles.row}>
        <Text style={productionRecordStyles.label}>Etapa</Text>
        {index !== INITIAL_INDEX && numberOfProductionSteps > 0 ? (
          <Text style={productionRecordStyles.dataOrAction}>
            {localData.step[index]}
          </Text>
        ) : (
          <Text style={productionRecordStyles.dataOrAction}>
            Sem etapa registrada
          </Text>
        )}
      </View>
      <View style={productionRecordStyles.row}>
        <Text style={productionRecordStyles.label}>Início</Text>
        {index !== INITIAL_INDEX && countOfInitialDateRecorded > 0 ? (
          <Text style={productionRecordStyles.dataOrAction}>
            {localData.start[index].toISOString()}
          </Text>
        ) : (
          <Text style={productionRecordStyles.dataOrAction}>
            Sem registro de horário de início
          </Text>
        )}
      </View>
      <View style={productionRecordStyles.row}>
        <Text style={productionRecordStyles.label}>Final</Text>
        {index !== INITIAL_INDEX && countOfFinalDateRecorded > 0 ? (
          <Text style={productionRecordStyles.dataOrAction}>
            {localData.end[index].toISOString()}
          </Text>
        ) : (
          <Pressable style={buttonStyles} onPress={showDatePickerForEndDate}>
            <Text style={productionOrderStyles.buttonLabel}>
              Selecione a data
            </Text>
          </Pressable>
        )}
      </View>
    </>
  );
}
