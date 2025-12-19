import { StyleSheet, View} from "react-native";
import ProductionRecordField from "../ProductionRecordField";
import { ProductionOrderData } from "@/models/ProductionOrderData";

export default function ProductionRecordTab() {
    const data: ProductionOrderData = {
        id: "9296188434",
        step: ["Corte"],
        start: [new Date(Date.UTC(2025,11,8,12,45,0)) ],
        end: []
    }

  return (
    <View style={styles.container}>
      <ProductionRecordField data={data} productionStepIndex={0}></ProductionRecordField>
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
