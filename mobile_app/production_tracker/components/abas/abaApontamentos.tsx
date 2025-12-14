import { Pressable, StyleSheet, View, Text } from "react-native";

export default function AbaApontamentos() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Ordem de Produção</Text>
        <Text style={styles.dataOrAction}>9296188434</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Etapa</Text>
        <Text style={styles.dataOrAction}>Corte</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Início</Text>
        <Text style={styles.dataOrAction}>08/12/2025 9:45</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Final</Text>
        <Pressable style={styles.dataOrAction}>
          <Text>Gravar final</Text>
        </Pressable>
      </View>
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
