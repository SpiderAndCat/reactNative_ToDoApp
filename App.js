import {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
//import { Button } from 'react-native-web';
import { StatusBar } from 'expo-status-bar';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';


export default function App() {

  const [tasks, setTasks] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddTaskHandler() {
    setModalIsVisible(true);
  }

  function endAddTaskHandler() {
    setModalIsVisible(false);
  }

  function addTaskHandler(enteredToDoTask) {
    console.log('Task: ')
    setTasks(t => [...t, {text: enteredToDoTask, id: Math.random.toString() }]);
   endAddTaskHandler();
  
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.container}>
        <Button onPress={startAddTaskHandler} title='Add New Task' color="orange"/>
        
        <TaskInput visible={modalIsVisible} onAddTask={addTaskHandler} onCancel={endAddTaskHandler}/>

        <View style={styles.tasksContainer}>
          <FlatList 
            data={tasks} 
            renderItem={ (itemData) => {

              return <TaskItem text={itemData.item.text} />;
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
            
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1
  },
  tasksContainer: {
    flex: 5,
    padding: 16,
    backgroundColor: 'gray'
  }
});
