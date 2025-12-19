import ListaDeOrdensdeProducao from "@/components/ListaDeOrdensdeProducao";
import { TipoOrdemDeProducao } from "@/models/TipoOrdemDeProducao";
import { EstadoOrdemDeProducao } from "@/models/enums/EstadoOrdemDeProducao";

export default function ProductionOrdersTab() {
  const data: TipoOrdemDeProducao[] = [
    {
      id: "1234567890",
      state: EstadoOrdemDeProducao.APROVADA,
    },
    {
      id: "1234567891",
      state: EstadoOrdemDeProducao.PENDENTE,
    },
    {
      id: "1234567892",
      state: EstadoOrdemDeProducao.APROVADA,
    },
    {
      id: "1234567893",
      state: EstadoOrdemDeProducao.APROVADA,
    },
    {
      id: "1234567894",
      state: EstadoOrdemDeProducao.PENDENTE,
    },
    {
      id: "1234567895",
      state: EstadoOrdemDeProducao.FINALIZADA,
    },
  ];

  return <ListaDeOrdensdeProducao ordens={data}></ListaDeOrdensdeProducao>;
}