import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DoneItem from './DoneItem';


class Done extends Component {
  
  render() {
    return this.props.done.map((done) => (
      <DoneItem key = {done.id} done = {done} markDel = {this.props.markDel}/>
    ));
  }
}

Done.propTypes = {
  done: PropTypes.array.isRequired
}

export default Done;
