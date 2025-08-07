import { View, Text, StyleSheet, Image } from "react-native";
import * as Animatable from 'react-native-animatable';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Animatable.Text 
        animation="fadeInDown" 
        delay={200} 
        style={styles.title}
      >
        Profil Pengguna
      </Animatable.Text>

      <Animatable.View 
        animation="fadeInUp" 
        delay={400} 
        style={styles.profileCard}
      >
        <Image 
          source={require('../../assets/images/Logo_PSM_Makasar_Baru.png')} 
          style={styles.profileImage}
        />
        <Text style={styles.name}>WIWIN FUAD SANJAYA</Text>

        <View style={styles.bioSection}>
          <View style={styles.bioRow}>
            <Text style={styles.label}>Kelas:</Text>
            <Text style={styles.value}>6D</Text>
          </View>
          <View style={styles.bioRow}>
            <Text style={styles.label}>NIM:</Text>
            <Text style={styles.value}>105841114222</Text>
          </View>
          <View style={styles.bioRow}>
            <Text style={styles.label}>Program Studi:</Text>
            <Text style={styles.value}>Informatika</Text>
          </View>
          <View style={styles.bioRow}>
            <Text style={styles.label}>Fakultas:</Text>
            <Text style={styles.value}>TEKNIK</Text>
          </View>
          <View style={styles.bioRow}>
            <Text style={styles.label}>Departemen:</Text>
            <Text style={styles.value}>Teknik Informatika</Text>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf6f9', // Latar elegan
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#003049',
    marginBottom: 24,
  },
  profileCard: {
    width: '100%',
    maxWidth: 390,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 26,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 18,
    borderWidth: 3,
    borderColor: '#ade8f4',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1d3557',
    marginBottom: 20,
    textAlign: 'center',
  },
  bioSection: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 16,
  },
  bioRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  label: {
    fontSize: 16,
    color: '#6c757d',
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212529',
  },
});
