import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';

export default function TabIndex() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animatable.View 
        animation="fadeInUp" 
        delay={200} 
        duration={800}
        style={styles.card}
      >
        <Image 
          source={{ uri: 'https://news.unismuh.ac.id/wp-content/uploads/2023/04/51231776_108783916909288_5111860601001345024_n.jpg' }} 
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
        <Text style={styles.description}>
          Universitas Muhammadiyah Makassar (Unismuh Makassar) adalah perguruan tinggi swasta yang berdiri sejak 19 Juni 1963 dan merupakan bagian dari amal usaha Muhammadiyah. Kampus ini berlokasi di Jl. Sultan Alauddin No. 259, Makassar, dan dikenal sebagai salah satu PTS unggulan di Indonesia Timur.
          {"\n\n"}
          Unismuh memiliki 7 fakultas dengan lebih dari 34 program studi serta program pascasarjana. Pada tahun 2024, Unismuh menjadi perguruan tinggi Muhammadiyah pertama di kawasan Indonesia Timur yang meraih Akreditasi Unggul dari BAN-PT.
          {"\n\n"}
          Fasilitas kampus meliputi gedung Iqra Tower, Masjid Subulussalam Al-Khoory, Balai Sidang Mukhtamar, perpustakaan modern, dan rusunawa mahasiswa. Civitas akademikanya mencakup lebih dari 22.000 mahasiswa dan lebih dari 200 dosen.
          {"\n\n"}
          Unismuh juga aktif menjalin kerja sama internasional serta meraih prestasi nasional, seperti dosen terbaik versi SINTA dan kampus penerima program KMMI dari Kemendikbud. Pendaftaran mahasiswa baru dibuka setiap tahun dengan berbagai jalur termasuk CBT dan nilai rapor, serta tersedia beasiswa unggulan seperti Bibit Unggul Persyarikatan.
        </Text>
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f4f8', // Latar belakang soft dan profesional
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#ffffff', // Kartu putih elegan
    borderRadius: 20,
    padding: 22,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    width: '100%',
    maxWidth: 380,
  },
  image: {
    width: '100%',
    height: 190,
    borderRadius: 14,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#344955', // Biru abu modern
    marginBottom: 14,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: '#444', // Abu gelap
    textAlign: 'justify',
    lineHeight: 24,
  },
});
