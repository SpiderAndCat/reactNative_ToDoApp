import {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
//import { Button } from 'react-native-web';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';


export default function App() {

  const [tasks, setTasks] = useState([]);

  function addTaskHandler(enteredToDoTask) {
    console.log('Task: ')
    setTasks(t => [...t, {text: enteredToDoTask, id: Math.random.toString() }]);
  }

  return (
    <View style={styles.container}>

      <TaskInput onAddTask={addTaskHandler}/>

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
