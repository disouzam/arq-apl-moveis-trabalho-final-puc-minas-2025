import { StyleSheet } from "react-native";

export const productionOrderStyles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      height: 50,
      padding: 0,
      margin: 5,
      fontSize: 20,
    },
    productionOrderState: {
      flex: 3,
      paddingLeft: 15,
      margin: 0,
      color: "#000",
      verticalAlign: "middle",
    },
    productionOrderId: {
      flex: 4,
      paddingLeft: 15,
      margin: 0,
      color: "#000",
      verticalAlign: "middle",
    },
    button: {
      flex: 5,
      borderRadius: 20,
      padding: 15,
      margin: 0,
      alignItems: "center",
      verticalAlign: "middle",
      backgroundColor: "yellow",
    },
    buttonLabel: {
      color: "#000",
      fontWeight: "bold",
    },
  });