import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../components/Button';
import TaskCard from '../components/TaskCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TaskCard task={{ title: 'Example Task' }} />
      <Button title="Add Task" onPress={() => console.log('Add task')} />
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

export default HomeScreen;
