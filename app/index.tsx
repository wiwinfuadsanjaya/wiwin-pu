import React from 'react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { Text } from 'react-native';

export default function MainLayout() {
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
  return <Stack />;
}
