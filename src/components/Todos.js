import React, { Component } from 'react'
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';
class Todos extends Component {
    render() {
            return this.props.todos.map((todo)=>(
                <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} delete={this.props.delete}/>
            ));
}
}
//proptypes give validation and checks to if a property has been passed or not
Todos.propTypes={
    todos : PropTypes.array.isRequired
}
export default Todos;
