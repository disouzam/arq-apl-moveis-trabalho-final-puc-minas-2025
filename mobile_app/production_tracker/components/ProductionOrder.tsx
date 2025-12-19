import React from "react";
import { Text, View } from "./Themed";
import { Pressable } from "react-native";
import { ProductionOrderType } from "@/models/ProductionOrderType";
import { ProductionOrderState } from "@/models/enums/ProductionOrderState";
import Colors from "@/constants/Colors";
import { useColorScheme } from "./useColorScheme";
import { productionOrderStyles } from "@/styles/productionOrderStyles";

export default function ProductionOrder(
  productionOrderType: ProductionOrderType
) {
  const colorScheme = useColorScheme();

  const isButtonEnabled = (state: ProductionOrderState) => {
    if (state === ProductionOrderState.PENDING) {
      return false;
    }
    return true;
  };

  const buttonStyle = (state: ProductionOrderState) => {
    if (isButtonEnabled(state)) {
      return [
        productionOrderStyles.button,
        {
          backgroundColor: Colors[colorScheme ?? "light"].tint,
        },
      ];
    }
    return [
      productionOrderStyles.button,
      {
        backgroundColor: Colors[colorScheme ?? "light"].tabIconDefault,
      },
    ];
  };

  const buttonLabel = (state: ProductionOrderState) => {
    switch (state) {
      case ProductionOrderState.APPROVED:
        return "Editar";
      case ProductionOrderState.PENDING:
        return "Solicitar aprovação";
      case ProductionOrderState.COMPLETED:
        return "Visualizar";
      default:
        return "Estado inconsistente";
    }
  };

  const onPress = (state: ProductionOrderState) => {
    switch (state) {
      case ProductionOrderState.APPROVED:
        return () => alert(`Editar ordem aprovada: ${productionOrderType.id}`);
      case ProductionOrderState.PENDING:
        return () =>
          alert(`Solicitar aprovação da ordem: ${productionOrderType.id}`);
      case ProductionOrderState.COMPLETED:
        return () =>
          alert(`Visualizar apontamentos: ${productionOrderType.id}`);
      default:
        return () => alert(`Estado inconsistente!`);
    }
  };

  return (
    <View style={productionOrderStyles.container}>
      <Text
        style={productionOrderStyles.productionOrderState}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        {productionOrderType.state}
      </Text>
      <Text
        style={productionOrderStyles.productionOrderId}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        {productionOrderType?.id}
      </Text>
      <Pressable
        style={buttonStyle(productionOrderType.state)}
        onPress={onPress(productionOrderType.state)}
      >
        <Text style={productionOrderStyles.buttonLabel}>
          {buttonLabel(productionOrderType.state)}
        </Text>
      </Pressable>
    </View>
  );
}
