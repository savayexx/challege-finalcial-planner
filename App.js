import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Fragment,
} from 'react-native';
import Constants from 'expo-constants';
// import { Provider } from 'react-redux';
import Navigator from './src/components/Navigator/Navigator';
import SafeAreaView from 'react-native-safe-area-view';
import * as Font from 'expo-font';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#4BBABC'} translucent={true} />
      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4BBABC'
  },
});