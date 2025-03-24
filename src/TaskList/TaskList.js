import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import './TaskList.css';

export default function TaskList({
  tasks,
  removeTask,
  toggleTaskCompletion,
  updateTask,
}) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <Task
          key={task.id} // Используйте уникальный идентификатор вместо индекса
          task={task}
          removeTask={() => removeTask(index)}
          toggleTaskCompletion={() => toggleTaskCompletion(index)}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
  removeTask: PropTypes.func.isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};
