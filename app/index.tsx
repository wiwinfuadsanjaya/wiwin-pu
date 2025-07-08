import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Persegi panjang berisi nama saja */}
      <View style={styles.rectangle}>
        <Text style={styles.nameText}>Abdullah Khaeruna Anwar</Text>
      </View>

      {/* Segitiga */}
      <View style={styles.triangle} />

      {/* Tabung (pill shape) berisi stambuk dan ikon */}
      <View style={styles.pill}>
        <Ionicons name="person" size={18} color="white" style={{ marginRight: 5 }} />
        <Text style={styles.pillText}>105841113822</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#f5f5f5",
  },
  rectangle: {
    width: 250,
    height: 100,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  nameText: {
    color: "red",
    fontSize: 22,
    fontWeight: "bold",
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 50,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "orange",
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6200ee",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 80,
  },
  pillText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
