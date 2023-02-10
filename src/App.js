import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <StatusBar style="dark" />
      <Text>Photo App</Text>
    </View>
  );
};

export default App;
