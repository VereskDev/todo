import React from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

export default function NewTaskForm({ addTask, setInputValue, inputValue }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={addTask}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </header>
  );
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  setInputValue: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};
