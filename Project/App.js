import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './homescreen';

export default function App() {
  return (
    <View style={styles.container}>
     <Homescreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40
  },
});
