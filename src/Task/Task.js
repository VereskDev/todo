import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Task.css';

export default function Task({
  task,
  removeTask,
  toggleTaskCompletion,
  updateTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const editInput = useRef(null);

  useEffect(() => {
    setNewText(task.text);
  }, [task.text]);

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => {
      if (editInput.current) {
        editInput.current.focus();
      }
    }, 0);
  };

  const handleSave = () => {
    updateTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          id={`task-checkbox-${task.id}`}
        />
        <label htmlFor={`task-checkbox-${task.id}`}>
          {isEditing ? (
            <input
              ref={editInput}
              className="editInput"
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSave();
                }
              }}
            />
          ) : (
            <span className="description" onDoubleClick={handleEdit}>
              {task.text}
            </span>
          )}
        </label>
        <button
          type="button"
          aria-label="Eslint отъебись"
          className="icon icon-edit"
          onClick={handleEdit}
        />
        <button
          type="button"
          aria-label="Eslint отъебись"
          onClick={removeTask}
          className="icon icon-destroy"
        />
      </div>
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  removeTask: PropTypes.func.isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};
