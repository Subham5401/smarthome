import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
});
