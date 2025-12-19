import React from "react";
import { Pressable } from "react-native";
import ProductionOrder from "./ProductionOrder";
import { ProductionOrderType } from "@/models/ProductionOrderType";
import { View } from "./Themed";

type Props = {
  productionOrders: ProductionOrderType[];
};

export default function ProductionOrdersList(props: Props) {
  const items: React.JSX.Element[] = props.productionOrders.map((o) => (
    <ProductionOrder key={o.id} id={o.id} state={o.state}></ProductionOrder>
  ));
  return <View>{items}</View>;
}
