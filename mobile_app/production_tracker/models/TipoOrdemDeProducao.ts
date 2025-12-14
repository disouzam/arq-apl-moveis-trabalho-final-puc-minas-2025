import { EstadoOrdemDeProducao } from "./enums/EstadoOrdemDeProducao";

export type TipoOrdemDeProducao = {
  id: string;
  state: EstadoOrdemDeProducao;
};