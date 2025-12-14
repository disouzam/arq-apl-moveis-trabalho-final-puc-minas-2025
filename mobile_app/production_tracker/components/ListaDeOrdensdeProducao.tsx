import React from "react";
import OrdemDeProducao from "./OrdemDeProducao";
import { TipoOrdemDeProducao } from "@/models/TipoOrdemDeProducao";

type Props = {
  ordens: TipoOrdemDeProducao[];
}

export default function ListaDeOrdensdeProducao(
  props: Props
) {
  const items: React.JSX.Element[] = props.ordens.map((o) => (
    <OrdemDeProducao key={o.id} id={o.id} state={o.state}></OrdemDeProducao>
  ));
  return <>{items}</>;
}
