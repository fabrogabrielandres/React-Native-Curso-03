import React from 'react';
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import DimencionesScreen from './src/screens/DimencionesScreen';
import PositionScreen from './src/screens/PositionScreen';

export const App = () => {


  return (
    <SafeAreaView style={{flex:1}}>
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimencionesScreen/> */}
      <PositionScreen/>
    </SafeAreaView>
  )
}




