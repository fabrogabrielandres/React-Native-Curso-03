import React from 'react';
import { SafeAreaView, useWindowDimensions } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import DimencionesScreen from './src/screens/DimencionesScreen';
import EjerA from './src/screens/EjerA';
import PositionScreen from './src/screens/PositionScreen';
import EjerB from './src/screens/EjerB';
import EjerC from './src/screens/EjerC';
import EjerD from './src/screens/EjerD';
import EjerE from './src/screens/EjerE';
import EjerF from './src/screens/EjerF';
import EjerG from './src/screens/EjerG';
import EjerH from './EjerH';


export const App = () => {
  const { width, height } = useWindowDimensions()

  return (
    <SafeAreaView style={{ width: width, height: height }}>
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimencionesScreen/> */}
      {/* <PositionScreen/> */}
      {/* <EjerA/> */}
      {/* <EjerB/> */}
      {/* <EjerC/> */}
      {/* <EjerD/> */}
      {/* <EjerE/> */}
      {/* <EjerF/> */}
      {/* <EjerG /> */}
      <EjerH/>
    </SafeAreaView>
  )
}




