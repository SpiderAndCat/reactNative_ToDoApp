import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='What do you need to do?'></TextInput>
        <Button style={styles.addButton}title='Add Task'/>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    marginRight: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: 'blue',
    width: '80%'

  },
  addButton: {
    alignItems: 'center'
  }
});
