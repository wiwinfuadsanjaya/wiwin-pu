import { useFonts } from 'expo-font';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Tugas4Screen() {
  const [fontsLoaded] = useFonts({
    // 5 static fonts
    'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
    // 5 variable fonts
    'Montserrat-Variable': require('../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    'Montserrat-Italic-Variable': require('../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
    'OpenSans-Variable': require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    'OpenSans-Italic-Variable': require('../assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf'),
    'Bitcount-Variable': require('../assets/fonts/Bitcount-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading Fonts...</Text>;
  }

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

  // Daftar font yang diimpor
  const staticFonts = [
    'Poppins-Black',
    'Poppins-Bold',
    'Poppins-ExtraBold',
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

  // Temukan index patokan stambuk
  const patokan = '105841114222';
  const idxPatokan = mahasiswa.findIndex(m => m.stambuk === patokan);

  // Fungsi untuk wrap-around array
  function getWrapped(arr: any[], start: number, count: number, reverse = false) {
    const res = [];
    let i = start;
    for (let c = 0; c < count; c++) {
      if (reverse) {
        i = (i - 1 + arr.length) % arr.length;
      } else {
        i = (i + 1) % arr.length;
      }
      res.push(arr[i]);
    }
    return reverse ? res.reverse() : res;
  }

  // 5 sebelum patokan (mundur, wrap-around)
  const sebelum = getWrapped(mahasiswa, idxPatokan, 5, true);
  // 5 sesudah patokan (maju, wrap-around)
  const sesudah = getWrapped(mahasiswa, idxPatokan, 5, false);

  // Gabungkan dan assign font berbeda
  const names = [
    ...sebelum.map((m, i) => ({ name: m.nama, font: staticFonts[i] })),
    ...sesudah.map((m, i) => ({ name: m.nama, font: variableFonts[i] })),
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tugas 4: 10 Nama Mahasiswa</Text>
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
