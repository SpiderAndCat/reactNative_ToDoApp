import {useState} from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
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

        <View style={styles.start}>
          <Text style={styles.title}>My React Native ToDo App</Text>
          <View style={styles.button}>
            <Button onPress={startAddTaskHandler} title='Add New Task' color='none'/>
          </View>
        </View>
        
        
        <TaskInput visible={modalIsVisible} onAddTask={addTaskHandler} onCancel={endAddTaskHandler}/>

        <Text style={styles.header}>My Tasks</Text>

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
    backgroundColor: '#FFA500',
    padding: 50,
    flex: 1
  },
  start: {
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    fontWeight: 900,
    fontSize: '1em',
    marginBottom: 8,
    color: "white",
    flex: 3
  },
  header: {
    fontWeight: 600,
    fontSize: '1em',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 4,
    color: "white",
    backgroundColor: "#EE9400",
    borderRadius: 12


  },
  tasksContainer: {
    flex: 5,
    padding: 16,
    backgroundColor: '#EE9400',
    borderRadius: 12

  },
  button: {
    backgroundColor:"#4488FF",
    marginBottom: 16,
    borderRadius: 25
  }
});

/*
#4169E1
#FF6B35
*/
