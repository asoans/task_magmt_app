// src/redux/actions/taskActions.js
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task
});

export const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task
});
