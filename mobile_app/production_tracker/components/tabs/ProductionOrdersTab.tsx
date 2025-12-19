import ProductionOrdersList from "@/components/ProductionOrdersList";
import { ProductionOrderType } from "@/models/ProductionOrderType";
import { ProductionOrderState } from "@/models/enums/ProductionOrderState";
import { useState, useEffect, useCallback } from "react";
import { Pressable } from "react-native";
import { Text, View } from "../Themed";
import { productionOrderTabStyles } from "@/styles/productionOrderTabStyles";
import { useColorScheme } from "../useColorScheme";
import Colors from "@/constants/Colors";

export default function ProductionOrdersTab() {
  const colorScheme = useColorScheme();

  function buttonStyle() {
    return [
      productionOrderTabStyles.button,
      {
        backgroundColor: Colors[colorScheme ?? "light"].tint,
      },
    ];
  }

  const dummyData: ProductionOrderType[] = [
    {
      id: "1234567890",
      state: ProductionOrderState.APPROVED,
    },
    {
      id: "1234567891",
      state: ProductionOrderState.PENDING,
    },
    {
      id: "1234567892",
      state: ProductionOrderState.APPROVED,
    },
    {
      id: "1234567893",
      state: ProductionOrderState.APPROVED,
    },
    {
      id: "1234567894",
      state: ProductionOrderState.PENDING,
    },
    {
      id: "1234567895",
      state: ProductionOrderState.COMPLETED,
    },
  ];

  const [data, setData] = useState(dummyData);

  function handleProductionOrderRemoval() {
    console.log(data.length);
    if (data.length > 0) {
      setData((prev) => {
        prev.pop();
        return prev;
      });
    }
  }

  const removeItems = useCallback(() => {
    handleProductionOrderRemoval();
  }, [data, handleProductionOrderRemoval]);

  useEffect(() => {
    removeItems();
  }, [removeItems]);

  return (
    <View>
      <View>
        <ProductionOrdersList productionOrders={data}></ProductionOrdersList>
      </View>
      <View style={productionOrderTabStyles.container}>
        <Pressable style={buttonStyle()} onPress={removeItems}>
          <Text style={productionOrderTabStyles.buttonLabel}>
            Recarregar lista
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
