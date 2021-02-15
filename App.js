import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native'
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen'
import AppContainer from './src/index'
const App: () => React$Node = () => {
  
  return (
    <>
      <AppContainer />
    </>
  );
};

const styles = StyleSheet.create({
  home:{flex:1},
  scrollView: {
    flex:1,
    backgroundColor: Colors.lighter,
  }
});

export default App;
