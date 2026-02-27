/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, View, Text, BackHandler } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider style={styles.primaryView}>
      <SafeAreaView>
        <View style={styles.subView}></View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  //MainView
  primaryView: {
    backgroundColor: '#6367FF',
    flex: 1,
    padding: 2,
  },
  //secondView
  subView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  //Red Box
  redBox: {
    backgroundColor: '#FF0000',
    width: 50,
    height: 50,
  },
});

export default App;
