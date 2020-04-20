import React, { Component } from 'react'

export class Addtodos extends Component {
    state={
        task:''
    }
    addtask=()=>{
        let task=document.getElementById('add-todo');
        if(task.value.length!==0 && task.value!==' ') {
            this.setState({task:''});
            this.props.addTask(task.value);
        }else 
        {console.log('error');}
    }
    onchange=(e)=>{
        this.setState({task:e.target.value});
    }
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <input type="text" placeholder="todo" id="add-todo"  value={this.state.task} onChange={this.onchange}/><br />
                <button style={{backgroundColor:"blue",color:"white",padding:"0.2em",margin:"0.5em"}} onClick={this.addtask}>Add</button>
            </div>
        )
    }
}

export default Addtodos
