import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

const stambukPatokan = 105841114222;

const namaMahasiswa = [
  { nama: "Wiwin fuad sanjaya", font: "ubuntu" },
  { nama: "Aditya", font: "Bitcount_Cursive-Black.ttf" },
  { nama: "Alriyadi ", font: "Bitcount_Cursive-Bold.ttf" },
  { nama: "Abdullah", font: "Bitcount_Cursive-ExtraBold.ttf" },
  { nama: "Syahrul", font: "Bitcount_Cursive-ExtraLight.ttf" },
  { nama: "Afil ", font: "Bitcount_Cursive-Medium.ttf" },
  { nama: "Muh fatur", font: "Bitcount_Cursive-Regular.ttfd" },
  { nama: "Nisa ", font: "Bitcount_Cursive-SemiBold.ttf" },
  { nama: "Muh dzikri ", font: "Bitcount_Cursive-Thin.ttf" },
  { nama: "Isnandar ", font: "Bitcount_Roman-Black.ttf" },
];

// Urutkan berdasarkan stambuk (low index numbers dulu)
const sortedNama = [...namaMahasiswa].sort((a, b) => {
  const stambukA = parseInt(a.nama.split("-")[2].trim());
  const stambukB = parseInt(b.nama.split("-")[2].trim());
  return stambukA - stambukB;
});

// Pisahkan sebelum dan sesudah patokan
const sebelum = sortedNama.filter((item) => {
  const stambuk = parseInt(item.nama.split("-")[1].trim());
  return stambuk < stambukPatokan;
});

const sesudah = sortedNama.filter((item) => {
  const stambuk = parseInt(item.nama.split("-")[1].trim());
  return stambuk > stambukPatokan;
});

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daftar Nama Mahasiswa</Text>

      <Text style={styles.subTitle}>Sebelum Stambuk {stambukPatokan}</Text>
      {sebelum.map((item, index) => (
        <View key={`sbl-${index}`} style={styles.card}>
          <Text style={[styles.namaText, { fontFamily: item.font }]}>
            {item.nama}
          </Text>
        </View>
      ))}

      <Text style={styles.subTitle}>Sesudah Stambuk {stambukPatokan}</Text>
      {sesudah.map((item, index) => (
        <View key={`ssd-${index}`} style={styles.card}>
          <Text style={[styles.namaText, { fontFamily: item.font }]}>
            {item.nama}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 24,
    backgroundColor: "#EEF2F7",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: 30,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
    color: "#34495e",
    alignSelf: "flex-start",
  },
  card: {
    width: width * 2.5,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#e6ecf1",
  },
  namaText: {
    fontSize: 18,
    color: "#34495e",
  },
});