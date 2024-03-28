import { StyleSheet, Text, View } from 'react-native';
import Pokemoncard from './components/Pokemoncard';

export default function App() {
  return (
    <View style={styles.container}>
      <Pokemoncard />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
