import React from "react";
import OrdemDeProducao, { TipoOrdemDeProducao } from "./OrdemDeProducao";

type Props = {
  ordens: TipoOrdemDeProducao[];
}

export default function ListaDeOrdensdeProducao(
  props: Props
) {
  const items: React.JSX.Element[] = props.ordens.map((o) => (
    <OrdemDeProducao id={o.id} state={o.state}></OrdemDeProducao>
  ));

  return <>{items}</>;
}
