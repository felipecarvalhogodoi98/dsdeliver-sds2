import { useFonts, OpenSans_400Regular, OpenSans_700Bold} from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {

    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold
    });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} />
            <Text style={styles.text}>DS Delivery</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 90,
    paddingTop: 45,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontFamily: ' OpenSans_700Bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#FFF',
    marginLeft: 15,
    marginTop: 4
  }
});