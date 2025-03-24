import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import TaskFilter from '../TasksFilter/TaskFilter';

function Footer({ setFilter, removeCompleted, activeCount }) {
  return (
    <footer className="footer">
      <span className="todo-count">{activeCount} left</span>
      <TaskFilter setFilter={setFilter} removeCompleted={removeCompleted} />
      <button
        type="button"
        onClick={removeCompleted}
        className="clear-completed"
      >
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  setFilter: PropTypes.func.isRequired,
  removeCompleted: PropTypes.func.isRequired,
  activeCount: PropTypes.number.isRequired,
};

export default Footer;
