import { StyleSheet, View} from "react-native";
import CampoApontamento from "../CampoApontamento";
import { DadosOrdemDeProducao } from "@/models/DadosOrdemDeProducao";

export default function ProductionRecordTab() {
    const dados: DadosOrdemDeProducao = {
        idDaOrdemDeProducao: "9296188434",
        etapa: ["Corte"],
        inicio: [new Date(Date.UTC(2025,11,8,12,45,0)) ],
        final: []
    }

  return (
    <View style={styles.container}>
      <CampoApontamento dados={dados} indexEtapa={0}></CampoApontamento>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "contents",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    height: 60,
    margin: 15,
  },
  label: {
    width: "48%",
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    alignContent: "center",
    textAlignVertical: "center",
    backgroundColor: "#F7F2FA",
    borderRadius: 10,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    boxShadow: "1px 1px black",
  },
  dataOrAction: {
    width: "48%",
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 0,
    textAlign: "center",
    alignContent: "center",
    textAlignVertical: "center",
    backgroundColor: "#D9D9D9",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    boxShadow: "1px 1px black",
  },
});
