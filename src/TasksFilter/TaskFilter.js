import React from 'react';
import PropTypes from 'prop-types';
import './TaskFilter.css';

export default function TaskFilter({ setFilter }) {
  return (
    <ul className="filters">
      <li>
        <button
          type="button"
          onClick={() => setFilter('all')}
          className="selected"
        >
          All
        </button>
        <button type="button" onClick={() => setFilter('active')}>
          Active
        </button>
        <button type="button" onClick={() => setFilter('completed')}>
          Completed
        </button>
      </li>
    </ul>
  );
}

TaskFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
