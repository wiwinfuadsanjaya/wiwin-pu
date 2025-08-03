
import React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';


export default function FontScreen() {
  // Data mahasiswa (nama dan stambuk)
  const mahasiswa = [
    { nama: 'yudis', stambuk: '105841114217' },
    { nama: 'al', stambuk: '105841114218' },
    { nama: 'abdul', stambuk: '105841114219' },
    { nama: 'afil', stambuk: '105841114220' },
    { nama: 'nisa', stambuk: '105841114221' },
    { nama: 'alif', stambuk: '105841114222' }, // patokan
    { nama: 'fahmi', stambuk: '105841114223' },
    { nama: 'mutiara', stambuk: '105841114224' },
    { nama: 'hasrul', stambuk: '105841114225' },
    { nama: 'alwi', stambuk: '105841114226' },
  ];

  // Daftar font yang diimpor (harus sama persis dengan app/_layout.tsx)
  // 5 font statis dan 5 font variable
  const staticFonts = [
    'Poppins-Black',
    'Poppins-Bold',
    'Poppins-ExtraBoldItalic',
    'Poppins-ExtraLight',
    'SpaceMono-Regular',
  ];
  const variableFonts = [
    'Montserrat-Variable',
    'Montserrat-Italic-Variable',
    'OpenSans-Variable',
    'OpenSans-Italic-Variable',
    'Bitcount-Variable',
  ];

  // Aturan khusus urutan wrap-around
  const patokan = '105841114222';
  const idxPatokan = mahasiswa.findIndex(m => m.stambuk === patokan);
  const total = mahasiswa.length;

  // Ambil 5 sebelum patokan (mundur, wrap-around)
  const sebelum = [];
  for (let i = 1; i <= 5; i++) {
    sebelum.push(mahasiswa[(idxPatokan - i + total) % total]);
  }
  sebelum.reverse(); // urutan mundur

  // Ambil 5 sesudah patokan (maju, wrap-around)
  const sesudah = [];
  for (let i = 1; i <= 5; i++) {
    sesudah.push(mahasiswa[(idxPatokan + i) % total]);
  }

  // Gabungkan dan assign font berbeda
  const names = [
    ...sebelum.map((m, i) => ({ name: m.nama, font: staticFonts[i] })),
    ...sesudah.map((m, i) => ({ name: m.nama, font: variableFonts[i] })),
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>10 Nama Mahasiswa (Font Berbeda)</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5 Nama Sebelum Stambuk {patokan}</Text>
        {names.slice(0, 5).map((item) => (
          <Text key={item.name} style={[styles.text, { fontFamily: item.font }]}> 
            {item.name}
          </Text>
        ))}
      </View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5 Nama Setelah Stambuk {patokan}</Text>
        {names.slice(5).map((item) => (
          <Text key={item.name} style={[styles.text, { fontFamily: item.font }]}> 
            {item.name}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#222',
    textAlign: 'center',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
    textAlign: 'center',
  },
  text: {
    fontSize: 24,
    marginVertical: 6,
    color: '#333',
    textAlign: 'center',
  },
  divider: {
    width: '80%',
    height: 2,
    backgroundColor: '#eee',
    marginVertical: 18,
    alignSelf: 'center',
  },
});
