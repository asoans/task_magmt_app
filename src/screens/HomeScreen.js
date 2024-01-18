import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import TaskCard from '../components/TaskCard'; // Import your TaskCard component

const HomeScreen = ({ navigation }) => {
  // Dummy data for illustration
  const tasks = [
    { id: '1', title: 'Task 1' },
    { id: '2', title: 'Task 2' },
    // ... more tasks
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onPress={() => navigation.navigate('TaskDetail', { taskId: item.id })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
