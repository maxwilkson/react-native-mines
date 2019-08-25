import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import params from './src/params';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Iniciando Mines!</Text>
      <Text>Tamanho da grade: {params.getRowsAmount()}X{params.getColumnsAmount()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height
  }
});

export default App;
