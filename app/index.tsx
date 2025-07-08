import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.mainContainer}>
      {/* Header berisi nama dalam kotak hitam */}
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>Wiwin Fuad Sanjaya</Text>
      </View>

      {/* Segitiga berwarna orange */}
      <View style={styles.triangle} />

      {/* Kapsul berisi stambuk dan ikon */}
      <View style={styles.stambukContainer}>
        <Ionicons name="person" size={19} color="#ffffff" style={{ marginRight: 6 }} />
        <Text style={styles.stambukText}>105841114222</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2", // beda warna latar
    paddingVertical: 20,
  },
  headerBox: {
    width: 255,
    height: 90,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    marginBottom: 25, // ganti dari gap
  },
  headerText: {
    color: "#ff3333", // beda warna merah
    fontSize: 22,
    fontWeight: "700", // sedikit lebih tebal
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 26,
    borderRightWidth: 26,
    borderBottomWidth: 50,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "orange",
    marginBottom: 25,
  },
  stambukContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4a00c2", // ubah warna ungu
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 100,
  },
  stambukText: {
    color: "#fff",
    fontSize: 14.5,
    fontWeight: "bold",
  },
});
