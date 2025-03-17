import React from "react";
import Task from "../Task/Task";  // Путь к компоненту Task
import './TaskList.css';  // Путь к нужному CSS файлу

export default function TaskList({ tasks, removeTask, toggleTaskCompletion, updateTask }) {
    return (
        <ul className="todo-list">
            {tasks.map((task, index) => (
                <Task
                    key={task.id}
                    task={task}
                    removeTask={() => removeTask(index)}
                    toggleTaskCompletion={() => toggleTaskCompletion(index)}
                    updateTask={updateTask}
                />
            ))}
        </ul>
    );
}
