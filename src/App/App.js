import './App.css';
import React, { useState } from 'react';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';
import NewTaskForm from '../NewTaskForm/NewTaskForm';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  const toggleTaskCompletion = (key) => {
    setTasks(
      tasks.map((task, k) =>
        k === key ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (e) => {
    e.preventDefault();
    if (inputValue) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
          createdAt: new Date(),
        },
      ]);
      setInputValue('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const removeCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed;
    }
    if (filter === 'completed') {
      return task.completed;
    }
    return true;
  });

  const countActiveTasks = () => tasks.filter((task) => !task.completed).length;

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  return (
    <section className="todoapp">
      <section className="main">
        <NewTaskForm
          addTask={addTask}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <TaskList
          removeTask={removeTask}
          tasks={filteredTasks}
          toggleTaskCompletion={toggleTaskCompletion}
          updateTask={updateTask}
        />
        <Footer
          setFilter={setFilter}
          removeCompleted={removeCompleted}
          activeCount={countActiveTasks()}
        />
      </section>
    </section>
  );
}
