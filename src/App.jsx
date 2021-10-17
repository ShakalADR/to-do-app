import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './components/styles/App.css';
import Btn from './components/UI/button/Btn.jsx';
import TaskList from './components/TaskList';
import CreateNewTask from './components/CreateNewTask';


function App() {
  return (
    <Router>
      <Switch> 
        <Route exact path="/" component={FirstPage}>
        </Route>
        <Route path="/newTask" component={CreateNewTask}>
        </Route>
        <Route path="/tasks" component={TaskList}>
        </Route>
        </Switch>
    </Router> 
  );
}

export default App;

function FirstPage(){
  return(
    <div className="App FirstPage">
      <main>
        <Link to="/newTask">
          <Btn>Create new task</Btn>
        </Link>
        <hr className="hrText" data-content="OR"/>
        <Link to="/tasks">
          <Btn style={{"color": "#87ceeb", "border-color":"#87ceeb"}}>Check all tasks</Btn>
        </Link>
      </main>
    </div>
  )
}
