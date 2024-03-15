import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='What do you need to do?'></TextInput>
        <View style={styles.addButton}>
          <Button title='Add Task'/>
        </View>
      </View>

      <View style={styles.tasksContainer}>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingTop: 8,
    marginBottom: 16,
    borderBottomWidth: 1,
    maxHeight: 55
  },
  textInput: {
    marginRight: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: 'blue',
    width: '80%',
    height: '100%'
  },
  addButton: {
    alignItems: 'center',
    height: '100vh'
  },
  tasksContainer: {
    flex: 5,
    padding: 16,
    backgroundColor: 'gray'
  }
});
