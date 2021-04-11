import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  id = 6;

  state = {
    task: [
      {
        id: 0,
        text: 'Pierwsze zadanie',
        active: true,
        important: false,
        done: false,
        date: '2020-10-21',
        finishDate: null,
      },
      {
        id: 1,
        text: 'Drugie zadanie',
        active: true,
        important: false,
        done: false,
        date: '2020-10-21',
        finishDate: null,
      },
      {
        id: 2,
        text: 'Trzecie zadanie',
        active: true,
        important: false,
        done: false,
        date: '2020-10-21',
        finishDate: null,
      },
      {
        id: 3,
        text: 'Czwarte zadanie',
        active: true,
        important: false,
        done: false,
        date: '2020-10-21',
        finishDate: null,
      },
      {
        id: 4,
        text: 'Piąte zadanie',
        active: true,
        important: false,
        done: false,
        date: '2020-10-21',
        finishDate: null,
      },
      {
        id: 5,
        text: 'Szóste zadanie',
        active: true,
        important: false,
        done: false,
        date: '2020-10-21',
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    let task = [...this.state.task];
    task = task.filter((item) => item.id !== id);
    this.setState({
      task,
    });
  };

  changeStatus = (id) => {
    let task = [...this.state.task];
    // const index = task.findIndex((item) => item.id === id);
    task.forEach((item) => {
      if (item.id === id) {
        item.active = false;
        item.finishDate = new Date().toISOString().slice(0, 10);
      }
    });

    this.setState({
      task,
    });
  };

  AddNewTaks = (text, date) => {
    console.log(date);
    const newTask = {
      id: this.id,
      text,
      active: true,
      important: false,
      done: false,
      date,
      finishDate: null,
    };

    this.setState((prevState) => ({
      task: [...prevState.task, newTask],
    }));

    this.id++;
    return true;
  };

  render() {
    return (
      <div className="wrapper">
        <header>
          <h1>
            <em>Aplikacja ToDo App</em>
          </h1>
        </header>
        <AddTask Add={this.AddNewTaks} />
        <TaskList
          task={this.state.task}
          deleteTask={this.deleteTask}
          changeStatus={this.changeStatus}
        />
        <div>yet another new footer</div>
      </div>
    );
  }
}

export default App;
