import React from "react";

import './Footer.css'

import TaskFilter from "../TasksFilter/TaskFilter";

const Footer = ({setFilter, removeCompleted,activeCount}) => {//забыл добавить фильтр в деструктуризаию стрелочная нужна когда есть аргументы
    return (
        <footer className="footer">
            <span className="todo-count">{activeCount} left</span>
            <TaskFilter setFilter={setFilter} removeCompleted={removeCompleted} />
            <button onClick={removeCompleted} className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer;