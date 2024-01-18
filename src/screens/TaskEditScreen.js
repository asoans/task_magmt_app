import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const TaskEditScreen = ({ route }) => {
  const [taskTitle, setTaskTitle] = useState('');
  // If editing an existing task, you can load its data here using the task ID from route.params

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <Button title="Save Task" onPress={() => {/* Save the task logic */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default TaskEditScreen;
