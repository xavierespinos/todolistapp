import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
  getStyle = () => {
    return{
      background: '#fff',
      padding: '10px',
      borderRadius: '10px',
      border: '1px #ccc solid',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      margin: '4px'
    }
  }

  render() {
    const {id, title} = this.props.todo;
    return (
      <div style = {this.getStyle()}>
        <p>
          <input type = 'checkbox' onChange = {this.props.markComplete.bind(this, id)}/>
          {' '}
          {title} 
          <button style={styleDel} onClick = {this.props.markDel.bind(this, id)}>x</button>
        </p>
      </div>
    );  
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const styleDel = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  curosr: 'pointer',
  float: 'right'                                      

}

export default TodoItem;