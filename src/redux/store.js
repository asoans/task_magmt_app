import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import your reducers here
import taskReducer from './reducers/taskReducer';
import userReducer from './reducers/userReducer';

// Combine all your reducers into one root reducer
const rootReducer = combineReducers({
  tasks: taskReducer,
  user: userReducer,
  // Add more reducers as needed
});

// Middleware configuration
const middleware = [thunk]; // You can add more middlewares here if needed

// Create the Redux store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
