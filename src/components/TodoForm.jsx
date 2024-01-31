import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reducers/todoReducers';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(inputValue));
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
