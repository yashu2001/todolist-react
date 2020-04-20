import React from 'react';
import './App.css';
import Todos from  './components/Todos';
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
    })})
  }
  render(){
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delete={this.delete}/>
    </div>
  );}
}

export default App;
