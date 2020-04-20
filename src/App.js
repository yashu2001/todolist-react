import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Todos from  './components/Todos';
import Layout from './components/Layout';
import Addtodos from './components/Addtodos';
import About from './components/pages/About';
import axios from 'axios';
import PropTypes from 'prop-types';
class App extends React.Component {
  state={
    todos:[]
  }
  async componentDidMount(){
    let res=await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
    console.log(res);
    this.setState({todos:res.data});
  }
  markComplete=async (id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      todo.completed=todo.id===id?!todo.completed:todo.completed;
      return todo;
    })})

  }
  delete=async (id)=>{
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    this.setState({todos:this.state.todos.filter(todo=>{
      return todo.id!==id;
    })});
  }
   addTask=async (task)=>{
    await axios.post('https://jsonplaceholder.typicode.com/todos',{
      title:task,
      completed:false
    });
    this.setState({
      todos:[...this.state.todos,{id:(this.state.todos.length+1),title:task,completed:false}]
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
