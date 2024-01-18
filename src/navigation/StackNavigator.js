// src/navigation/StackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';
import TaskEditScreen from '../screens/TaskEditScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
      <Stack.Screen name="TaskEdit" component={TaskEditScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
