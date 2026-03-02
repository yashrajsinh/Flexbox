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
        {/* ==== First View ==== */}
        <View style={styles.firstView}>
          <View>
            <View style={styles.redBox}></View>
          </View>
          <View>
            <View style={styles.teal}></View>
          </View>
        </View>
        {/* ==== Second View ==== */}
        <View style={styles.firstView}>
          <View>
            <View style={styles.yellowBox}></View>
          </View>
          <View>
            <View style={styles.pinkBox}></View>
          </View>
        </View>
        {/* ==== Third View ==== */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  //MainView
  primaryView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 10,
  },
  //First View
  firstView: {
    margin: 10,
    flexDirection: 'row',
    gap: 15,
    alignSelf: 'flex-end',
  },

  //Red Box
  redBox: {
    backgroundColor: '#FF0000',
    width: 100,
    height: 100,
  },
  //Teal Box first
  teal: {
    backgroundColor: '#9CD5FF',
    width: 250,
    height: 100,
  },
  //pink Box
  pinkBox: {
    backgroundColor: '#FFA6A6',
    width: 100,
    height: 100,
  },
  //yello box
  yellowBox: {
    backgroundColor: '#FFD150',
    width: 250,
    height: 100,
  },
});

export default App;
