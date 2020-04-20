import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Todoitem extends Component {
    render() {
        return (
            <div style={this.getStyle()}>
            <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.todo.id)}/>{' '}
            {this.props.todo.title}
            <button style={{float:'right',backgroundColor:'red',color:'white',padding:'0.1em'}} onClick={this.props.delete.bind(this,this.props.todo.id)}>x</button>
            </p>
            </div>
        )
    }
    getStyle(){
        return {textDecoration: this.props.todo.completed ? 'line-through':'none',
                border:'solid 0.02em',
                background:'#f4f4f4',
                padding:'0.2em'
                }
    }
}
Todoitem.propTypes={
    todo : PropTypes.object.isRequired,
}
export default Todoitem;
