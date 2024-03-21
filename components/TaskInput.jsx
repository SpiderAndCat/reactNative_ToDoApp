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
                    <View style={styles.buttonViewAdd}>
                        <Button onPress={addTaskHandler} title='Add Task' color='none'/>
                    </View>
                    <View style={styles.buttonViewCancel}>
                        <Button title='Cancel' onPress={props.onCancel} color='none'/>
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
        backgroundColor: '#4488FF'
    },
      textInput: {
        maxHeight: 55,
        width: '80%',
        color: 'white',
        padding: 8,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#FFA500',
        height: '100%'
      },
      buttonContainer: {
        flexDirection: 'row',
        margin: 8
      },
      buttonViewAdd: {
        marginHorizontal: 4,
        paddingHorizontal: 8,
    
        backgroundColor:"#FFA500",
        borderRadius: 25,
     
      },
      buttonViewCancel: {
        marginHorizontal: 4,
        paddingHorizontal: 8,
    
        backgroundColor:"#3366DD",
        borderRadius: 25,
     
      },
  });

  /*
#4169E1
#FF6B35

'#EE9400'
*/
