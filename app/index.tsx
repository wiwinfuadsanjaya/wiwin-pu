import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Kotak data nama */}
      <View style={styles.nameBox}>
        <Text style={styles.nameText}>Abdullah Khaeruna Anwar</Text>
        <Text style={styles.stambukText}>105841113822</Text>
      </View>

      {/* Lingkaran hijau */}
      <View style={styles.circle} />

      {/* Persegi panjang berisi gambar */}
      <View style={styles.rectangle}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.image}
        />
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
  nameBox: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  nameText: {
    color: "red",
    fontSize: 25,
  },
  stambukText: {
    fontWeight: "bold",
    color: "white",
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: "green",
    borderRadius: 100,
  },
  rectangle: {
    width: 150,
    height: 100,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: "cover",
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
    borderRadius: 50,
  },
  pillText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
