import { useProductionOrdersService } from "@/api/productionOrders/useProductionOrdersService";
import { useCallback, useState, useEffect } from "react";
import ListaDeOrdensdeProducao from "../ListaDeOrdensdeProducao";

export default function AbaOrdemDeProducao() {
  debugger;

  console.warn("Início da execução da aba");

  const [loading, setLoading] = useState(false);
  const [initialLoadFinalized, setInitialLoadFinalized] = useState(false);
  const [productionOrderList, setProductionOrderList] = useState([]);
  const { getProductionOrders } = useProductionOrdersService();

  const loadProductionOrders = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getProductionOrders();
      setProductionOrderList(response);
    } finally {
      setLoading(false);
    }
  }, [getProductionOrders]);

  useEffect(() => {
    async function initialLoad() {
      await Promise.all([loadProductionOrders()]);
    }

    console.log("Carregando...");
    console.warn(`${initialLoadFinalized}`);

    if (!initialLoadFinalized) {
      initialLoad();
      setInitialLoadFinalized(true);
    }
  }, []);

  return (
    productionOrderList.length > 0 && (
      <ListaDeOrdensdeProducao
        ordens={productionOrderList}
      ></ListaDeOrdensdeProducao>
    )
  );
}
