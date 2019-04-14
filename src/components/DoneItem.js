import React, { Component } from 'react';
import PropTypes from 'prop-types';


class DoneItem extends Component {
  getStyle = () => {
    return{
      background: '#fff',
      padding: '10px',
      borderRadius: '10px',
      border: '1px #ccc solid',
      textDecoration: 'line-through',
      margin: '4px'
    }
  }

  render() {
    const {id, title} = this.props.done;
    return (
      <div style = {this.getStyle()}>
        <p>
          {title} 
          <button style={styleDel} onClick = {this.props.markDel.bind(this, id)}>x</button>
        </p>
      </div>
    );  
  }
}

DoneItem.propTypes = {
  done: PropTypes.object.isRequired
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

export default DoneItem;