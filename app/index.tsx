import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.wrapper}>
      {/* Kotak nama (persegi panjang) */}
      <View style={styles.nameBox}>
        <Text style={styles.name}>Afil Anugrah</Text>
      </View>

      {/* Bentuk segitiga */}
      <View style={styles.triangleShape} />

      {/* Bentuk kapsul berisi stambuk dan ikon */}
      <View style={styles.capsule}>
        <Ionicons name="person" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.idText}>105841113522</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    backgroundColor: "#eaeaea", // ubah warna latar
  },
  nameBox: {
    width: 260,
    height: 95,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    padding: 12,
  },
  name: {
    color: "#ff4444", // ganti warna merah agar sedikit berbeda
    fontSize: 23,
    fontWeight: "600",
  },
  triangleShape: {
    width: 0,
    height: 0,
    borderLeftWidth: 28,
    borderRightWidth: 28,
    borderBottomWidth: 55,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#ffa500",
  },
  capsule: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5c00cc",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 60,
  },
  idText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});
