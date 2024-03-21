import { StyleSheet, View, Text } from 'react-native';

function TaskItem(props) {
    return (
        <View style={styles.taskItem}>
            <Text style={styles.taskItemText}>{props.text}</Text>
        </View>
    );
};

export default TaskItem;


const styles = StyleSheet.create({
    taskItem: {
      borderRadius: 10,
      backgroundColor: '#4488FF',
      padding: 5,
      paddingLeft: 15,
      paddingRight: 15,
      margin: 2,
      color:'white'
    },
    taskItemText: {
      color: 'white'
    },
  });