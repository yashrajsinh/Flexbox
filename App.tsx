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
        <View style={styles.firstView}>
          <View>
            <View style={styles.blueBox}></View>
          </View>
        </View>
        {/* ==== Fourth View ==== */}
        <View style={styles.firstView}>
          <View>
            <View style={styles.orageBox}></View>
          </View>
          <View>
            <View style={styles.greenBox}></View>
            <View style={styles.greenBox}></View>
          </View>
        </View>
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
    alignSelf: 'center',
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
  //3rd box full view
  blueBox: {
    backgroundColor: '#9CD5FF',
    width: 360,
    height: 100,
  },
  //orange box
  orageBox: {
    backgroundColor: '#FF7F11',
    width: 90,
    height: 200,
  },
  //GreenBox
  greenBox: {
    backgroundColor: '#6D9E51',
    width: 240,
    height: 80,
    margin: 10,
  },
});

export default App;
