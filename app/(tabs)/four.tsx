import { StyleSheet, Text, View } from 'react-native';

 import { useSelector } from 'react-redux';
import { RootState } from '../store';
 
export default function TabFourScreen() {
    const text = useSelector((state: RootState) => state.text);
  return (
    <View style={styles.container}>
       <Text style={styles.title}>{text}</Text>
 
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
