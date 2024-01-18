import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskCard = ({ task }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.title}</Text>
      {/* Add more details if needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TaskCard;
