import ProductionOrdersList from "@/components/ProductionOrdersList";
import { ProductionOrderType } from "@/models/ProductionOrderType";
import { ProductionOrderState } from "@/models/enums/ProductionOrderState";

export default function ProductionOrdersTab() {
  const data: ProductionOrderType[] = [
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

  return <ProductionOrdersList productionOrders={data}></ProductionOrdersList>;
}