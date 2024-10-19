import { StyleSheet, Text, TextInput, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export default function TabOneScreen() {
  const text = useSelector((state: RootState) => state.text);
  const dispatch = useDispatch<AppDispatch>();

  function handleTextChange(newText: string) {
    dispatch({ type: 'SET_TEXT', payload: newText });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
       <TextInput
      value={text}
      onChangeText={handleTextChange}
      placeholder="Unesite tekst" style={styles.textInput}/>
     
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
  textInput:{backgroundColor: 'white', width:250, height: 40, borderColor: 'gray', borderWidth: 1},
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
