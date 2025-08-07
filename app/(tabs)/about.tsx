import { Text, View, ScrollView, StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Octicons } from '@expo/vector-icons';

export default function TabIndex() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animatable.View 
        animation="fadeInUp" 
        delay={100} 
        duration={800}
        style={styles.card}
      >
        <View style={styles.titleContainer}>
          <Octicons name="info" size={24} color="#2e7d32" style={styles.icon} />
          <Text style={styles.title}>Tentang Aplikasi</Text>
        </View>

        <Text style={styles.description}>
          Aplikasi ini dibuat untuk memenuhi tugas mata kuliah Pengembangan Aplikasi Mobile yang diberikan oleh dosen pengampu. Tujuannya adalah agar mahasiswa dapat memahami praktik langsung dalam membangun aplikasi mobile menggunakan teknologi modern seperti React Native dan Expo.

          {"\n\n"}
          <Text style={styles.subtitle}>Fungsi dari Masing-Masing Halaman:</Text>
          {"\n\n"}
          <Text style={styles.subtitle}>• Home:</Text> Menyajikan informasi umum tentang Universitas Muhammadiyah Makassar, sebagai kampus tempat pengembangan aplikasi ini dilakukan.
          
          {"\n\n"}
          <Text style={styles.subtitle}>• About:</Text> Menjelaskan secara detail mengenai tujuan pembuatan aplikasi, teknologi yang digunakan (React Native dan Expo), serta struktur dan fungsi dari setiap halaman dalam aplikasi.
          
          {"\n\n"}
          <Text style={styles.subtitle}>• Profil:</Text> Menampilkan data pengguna seperti nama lengkap, NIM, kelas, program studi, fakultas, dan departemen sebagai simulasi fitur data diri dalam aplikasi.

          {"\n\n"}
          Dengan membangun aplikasi ini, mahasiswa diharapkan mampu menerapkan teori yang dipelajari di kelas ke dalam proyek nyata berbasis React Native dan memahami proses kerja pembuatan aplikasi lintas platform secara praktis dan efisien.
        </Text>
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e8f5e9', // Hijau pastel
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 22,
    width: '100%',
    maxWidth: 390,
    elevation: 4,
    shadowColor: '#4caf50',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2e7d32', // Hijau tua elegan
  },
  subtitle: {
    fontWeight: '600',
    color: '#1b5e20',
  },
  description: {
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
});
