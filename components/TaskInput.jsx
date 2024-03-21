import {useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

function TaskInput(props) {
    const [enteredToDoTask, setEnteredToDoTask] = useState('');

    function taskTextEnteredHandler(text) {
        setEnteredToDoTask(text);
    }

    function addTaskHandler() {
        props.onAddTask(enteredToDoTask);
        setEnteredToDoTask('');

    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='What do you need to do?' onChangeText={taskTextEnteredHandler}></TextInput>
            <View style={styles.addButton}>
                <Button onPress={addTaskHandler} title='Add Task'/>
            </View>
        </View>
    );
};

export default TaskInput;


const styles = StyleSheet.create({
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
  });