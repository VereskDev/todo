import React from "react";
import './TaskFilter.css'


export default function  TaskFilter({setFilter}) {




        return (
            <ul className="filters">
                <li>
                    <button onClick={() => setFilter('all')} className="selected">All</button>
                </li>
                <li>
                    <button onClick={() => setFilter('active')} >Active</button>
                </li>
                <li>
                    <button onClick={() => setFilter('completed')} >Completed</button>
                </li>
            </ul>
        )

}

