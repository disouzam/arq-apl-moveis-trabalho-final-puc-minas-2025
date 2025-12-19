import { ProductionOrderState } from "./enums/ProductionOrderState";

export type ProductionOrderType = {
  id: string;
  state: ProductionOrderState;
};