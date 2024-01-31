import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoReducers';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
