import React from 'react';
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';

export const App = () => {


  return (
    <SafeAreaView>
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen /> */}
      <BoxObjectModelScreen />
    </SafeAreaView>
  )
}




