import './Task.css';
import React, { useState, useEffect, useRef } from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'; // Для отображения времени создания

export default function Task({ task, removeTask, toggleTaskCompletion, updateTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text || '');
    const [minutes, setMinutes] = useState(task.minutes || 0);
    const [seconds, setSeconds] = useState(task.seconds || 0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    // refs для хранения значений таймера и id интервала
    const intervalIdRef = useRef(null);
    const minutesRef = useRef(minutes);
    const secondsRef = useRef(seconds);

    useEffect(() => {
        // Обновляем refs при изменении состояний
        minutesRef.current = minutes;
        secondsRef.current = seconds;
    }, [minutes, seconds]);

    useEffect(() => {
        if (isTimerRunning && (minutes > 0 || seconds > 0)) {
            intervalIdRef.current = setInterval(() => {
                if (secondsRef.current === 0 && minutesRef.current > 0) {
                    setMinutes(prev => prev - 1);
                    setSeconds(59);
                } else if (secondsRef.current > 0) {
                    setSeconds(prev => prev - 1);
                } else {
                    clearInterval(intervalIdRef.current);
                    setSeconds(0);
                }
            }, 1000);
        } else {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        }

        // Очищаем интервал при размонтировании
        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        };
    }, [isTimerRunning, minutes, seconds]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        updateTask(task.id, newText);
        setIsEditing(false);
    };

    const handleStartStopTimer = () => {
        setIsTimerRunning(prev => !prev);
    };

    const handleResetTimer = () => {
        setMinutes(task.minutes);
        setSeconds(task.seconds);
        setIsTimerRunning(false);
    };

    return (
        <li className={task.completed ? "completed" : ""}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)} // Срабатывает при изменении состояния чекбокса
                />

                {isEditing ? (
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        onBlur={handleSave}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSave();
                            }
                        }}
                    />
                ) : (
                    <label onDoubleClick={handleEdit}>{task.text}</label>
                )}

                <div className="timer">
                    <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
                    <button onClick={handleStartStopTimer} className={isTimerRunning ? "icon icon-pause" : "icon icon-play"}></button>
                    <button onClick={handleResetTimer} className="icon icon-reset"></button>
                </div>

                {/* Время создания задачи */}
                <div className="created-time">
                    <span>{formatDistanceToNow(task.createdAt, { addSuffix: true })}</span>
                </div>

                {/* Кнопка Edit */}
                <button onClick={handleEdit} className="icon icon-edit"></button>

                <button onClick={removeTask} className="icon icon-destroy"></button>
            </div>
        </li>
    );
}
