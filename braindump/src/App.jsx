import React from "react";
import "./App.css";

function App() {
    return (
        <div className="todo__list">
            <div className="sidebar__container">
                <div className="project__header">🧠 My Projects</div>
                <div className="project__item__container">
                    <div className="project__item">Project 1</div>
                    <div className="project__item">Project 2</div>
                    <div className="project__item">Project 3</div>
                </div>
            </div>
            <div className="task__container">
                <div className="task__header">
                    <p className="task__header__title">Tasks to Complete</p>
                </div>
                <div className="task__item__container">
                    <div className="task__item">Task 1</div>
                    <div className="task__item">Task 2</div>
                    <div className="task__item">Task 3</div>
                </div>
            </div>
        </div>
    );
}

export default App;
