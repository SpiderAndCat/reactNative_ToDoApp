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
      <Text style={styles.title}>My React NativeToDo App</Text>

        <View style={styles.startContainer}>
        <Text style={styles.header}>My Tasks</Text>

          <View style={styles.button}>
            <Button onPress={startAddTaskHandler} title=' Add +' color='none'/>
          </View>
        </View>
        
        
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
    backgroundColor: '#FFA500',
    padding: 50,
    flex: 1
  },
  
  title: {
    fontWeight: 900,
    fontSize: '1em',
    marginBottom: 8,
    color: "white",
  },

  startContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,

  },

  header: {
    flex: 3,
    fontWeight: 600,
    fontSize: '0.8em',
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: "white",
    backgroundColor: "#EE9400",
    borderRadius: 12,
  },

  button: {
    flex: 1,
    backgroundColor:"#4488FF",
    borderRadius: 25,
    marginLeft: 16
  },
  
  tasksContainer: {
    flex: 5,
    padding: 16,
    marginTop: 0,
    backgroundColor: '#EE9400',
    borderRadius: 12

  }
});

/*
#4169E1
#FF6B35
*/
