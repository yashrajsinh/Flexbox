/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Row 1 */}
        <View style={styles.row}>
          <View style={[styles.box, styles.red, { flex: 1 }]} />
          <View style={[styles.box, styles.teal, { flex: 2 }]} />
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          <View style={[styles.box, styles.yellow, { flex: 2 }]} />
          <View style={[styles.box, styles.pink, { flex: 1 }]} />
        </View>

        {/* Full Width */}
        <View style={[styles.box, styles.blue]} />

        {/* Bottom Section */}
        <View style={[styles.row, { flex: 1 }]}>
          <View style={[styles.orangeTall, { flex: 1 }]} />

          <View style={[styles.column, { flex: 1 }]}>
            <View style={[styles.smallBox, styles.orange]} />
            <View style={[styles.smallBox, styles.green]} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },

  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },

  column: {
    gap: 15,
  },

  box: {
    height: 100,
    borderRadius: 10,
  },

  smallBox: {
    flex: 1,
    borderRadius: 10,
  },

  orangeTall: {
    flex: 1,
    backgroundColor: '#F57C00',
    borderRadius: 10,
  },

  red: { backgroundColor: '#FF4C4C' },
  teal: { backgroundColor: '#00B3C6' },
  yellow: { backgroundColor: '#FFD54F' },
  pink: { backgroundColor: '#FF80AB' },
  blue: { backgroundColor: '#00838F', marginBottom: 10 },
  orange: { backgroundColor: '#FBC02D' },
  green: { backgroundColor: '#4CAF50' },
});

export default App;
