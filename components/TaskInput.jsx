import {useState} from 'react';
import { Modal, StyleSheet, View, TextInput, Button } from 'react-native';

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
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput value={enteredToDoTask} style={styles.textInput} placeholder='What do you need to do?' onChangeText={taskTextEnteredHandler}></TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonView}>
                        <Button onPress={addTaskHandler} title='Add Task'/>
                    </View>
                    <View style={styles.buttonView}>
                        <Button title='Cancel' onPress={props.onCancel}/>
                    </View>

                </View>
            </View>
        </Modal>
    );
};

export default TaskInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#4169E1'
    },
      textInput: {
        maxHeight: 55,
        width: '80%',
        color: 'white',
        padding: 8,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#EE9400',
        height: '100%'
      },
      buttonContainer: {
        flexDirection: 'row',
        margin: 8
      },
      buttonView: {
        marginHorizontal: 4
      },
  });

  /*
#4169E1
#FF6B35

'#EE9400'
*/
