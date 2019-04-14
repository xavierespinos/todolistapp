import React, { Component } from 'react';
import Todos from './components/Todos';
import Done from './components/Done';
import Header from './components/Header'
import AddTodo from './components/AddTodo'

import './App.css';

class App extends Component {

  state = {
    numId: 0,
    todos: [],
    done: [] 
  }

  markComplete = (id) => {
    let newDone = {
      id: id,
      title: '',
      completed: true
    }
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        newDone = {
          id: id,
          title: todo.title,
          completed: true
        }
      }
      return todo;
    })}); 
    this.setState({done: [...this.state.done, newDone]});
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    
  } 


  markDel = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    this.setState({done: [...this.state.done.filter(done => done.id !== id)]})
    this.setState({numId: this.state.numId - 1})
  }

  addTodo = (title) => {
    console.log(title)
    const newTodo = {
      id: this.state.numId + 1,
      title,
      completed: false
    }
    this.setState({numId: this.state.numId + 1})
    this.setState({todos: [...this.state.todos, newTodo]});
  }
 
  render() {
    return(
      
      <div className="App"> 
        <div className='container'>
          <Header />
          <AddTodo addTodo = {this.addTodo}/>
          <div className='Todos'>
            <Todos todos = {this.state.todos} markComplete = {this.markComplete} markDel = {this.markDel}/>
          </div>
          <div className='Done'>
            <Done done = {this.state.done} markDel = {this.markDel}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
