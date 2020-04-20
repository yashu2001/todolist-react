import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Todos from  './components/Todos';
import Layout from './components/Layout';
import Addtodos from './components/Addtodos';
import About from './components/pages/About';
class App extends React.Component {
  state={
    todos:[
      {
        id:1,
        task:"Dinner with friends",
        completed:false
      },
      {
        id:2,
        task:"Learn node with academind",
        completed:false
      },
      {
        id:3,
        task:"Learn react with brad",
        completed:false
      }
    ]
  }
  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      todo.completed=todo.id===id?!todo.completed:todo.completed;
      return todo;
    })})

  }
  delete=(id)=>{
    this.setState({todos:this.state.todos.filter(todo=>{
      return todo.id!==id;
    })});
  }
  addTask=(task)=>{
    this.setState({
      todos:[...this.state.todos,{id:(this.state.todos.length+1),task,completed:false}]
    });
    return null;
  }
  render(){
  return (
    <Router>
      <div className="App">
        <Layout />
        <Route path="/about" component={About} />
        <Route exact path="/" render={props=>(
          <React.Fragment>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delete={this.delete}/>
            <br />
            <Addtodos addTask={this.addTask}/>
          </React.Fragment>
        )} />
        
      </div>
    </Router> 
  );}
}

export default App;
