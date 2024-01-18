import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TaskDetailScreen = ({ route, navigation }) => {
  const { taskId } = route.params; // Get the task ID passed from HomeScreen

  return (
    <View style={styles.container}>
      <Text>Task Detail Screen</Text>
      <Text>Task ID: {taskId}</Text>
      <Button
        title="Edit Task"
        onPress={() => navigation.navigate('TaskEdit', { taskId })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TaskDetailScreen;
