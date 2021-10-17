import React from 'react'
import './styles/TaskList.css'
import TaskListItem from './TaskListItem'

function TaskList() {
    return (
        <div className="App">
            <header>
                <h2>What you want to do now?</h2>
            </header>
            <main>
                <h5>Maybe something from this...</h5>
                <TaskListItem />
            </main>
        </div>
    )
}

export default TaskList
