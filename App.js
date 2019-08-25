import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import params from './src/params';
import Field from './src/components/Field';


const App = () => {
  return (
    <View style={styles.container}>
      <Text>Iniciando Mines!</Text>
      <Text>Tamanho da grade: {params.getRowsAmount()}X{params.getColumnsAmount()}</Text>
      <Field />
      <Field opened />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={3} />
      <Field opened nearMines={6} />
      <Field mined />
      <Field mined opened />
      <Field mined opened exploded />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

export default App;
