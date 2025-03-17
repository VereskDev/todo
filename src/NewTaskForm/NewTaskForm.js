import React, { useState } from 'react';
import './new-task-form.css';

export default function NewTaskForm({ addTask, inputValue, setInputValue, minutes, seconds, setMinutes, setSeconds }) {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Предотвращаем стандартное поведение
            // Вызываем функцию добавления задачи с текущими значениями
            addTask(inputValue, minutes, seconds);
        }
    };

    return (
        <header className="header new-todo-form">
            <h1>todos</h1>
            <form>
                <input
                    className="new-todo"
                    placeholder="Task"
                    autoFocus
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <input
                    className="new-todo-form__timer"
                    placeholder="Min"
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <input
                    className="new-todo-form__timer"
                    placeholder="Sec"
                    value={seconds}
                    onChange={(e) => setSeconds(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </form>
        </header>
    );
}
