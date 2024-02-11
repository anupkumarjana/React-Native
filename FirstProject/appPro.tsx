import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white',
    fontSize: 100,
  },
  darkText: {
    color: 'black',
    fontSize: 100,
  },
}); 

function AppPro() {
  const isDarkMode = useColorScheme() === 'dark'; //useColorScheme is a hook

  return (
    // <SafeAreaView>
    <View style={style.container}>
      <Text style={isDarkMode ? style.darkText : style.whiteText}>Hi!</Text>
    </View>
    // </SafeAreaView>
  );
}


export default AppPro;
