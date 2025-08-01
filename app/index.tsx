import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons, Entypo, Feather, AntDesign, MaterialCommunityIcons, Octicons, SimpleLineIcons, Foundation } from '@expo/vector-icons';

export default function IconScreen() {
  const icons = [
    { label: 'Ionicons', icon: <Ionicons name="planet" size={48} color="#4F8EF7" /> },
    { label: 'FontAwesome', icon: <FontAwesome name="rocket" size={48} color="#E74C3C" /> },
    { label: 'MaterialIcons', icon: <MaterialIcons name="face" size={48} color="#F1C40F" /> },
    { label: 'Entypo', icon: <Entypo name="aircraft" size={48} color="#2ECC71" /> },
    { label: 'Feather', icon: <Feather name="activity" size={48} color="#9B59B6" /> },
    { label: 'AntDesign', icon: <AntDesign name="apple1" size={48} color="#34495E" /> },
    { label: 'MaterialCommunity', icon: <MaterialCommunityIcons name="alien" size={48} color="#1ABC9C" /> },
    { label: 'Octicons', icon: <Octicons name="alert" size={48} color="#E67E22" /> },
    { label: 'SimpleLine', icon: <SimpleLineIcons name="energy" size={48} color="#16A085" /> },
    { label: 'Foundation', icon: <Foundation name="anchor" size={48} color="#C0392B" /> },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>10 Ikon Berbeda</Text>
      <View style={styles.iconGrid}>
        {icons.map((item, idx) => (
          <View key={idx} style={styles.iconBox}>
            {item.icon}
            <Text style={styles.iconLabel}>{item.label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#222',
    textAlign: 'center',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
    gap: 8,
  },
  iconBox: {
    width: 90,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    paddingVertical: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  iconLabel: {
    marginTop: 8,
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
  },
});
