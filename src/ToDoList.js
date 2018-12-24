import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoList extends Component {
  static propTypes = {
    removeItem: PropTypes.func.isRequired,
    checkItem: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
  };

  render() {
    const {todos, removeItem, checkItem} = this.props;
    const rows = todos.map((el, index) => {
      return (
        <li key={index} className='list-item'>
          <input 
            type='checkbox' 
            checked={el.isChecked ? 'checked': ''}
            onChange={() => {checkItem(index)}}
          />
          <span className='item-text'>{el.title}</span>
          <span className='item-status'>
            {el.isChecked ? 'Done!' : 'Not done'}
          </span>
          <span className='remove-item' onClick={() => { removeItem(index) }}>&times;</span>
        </li>
      );
    });

    return (
      <ul className='todo-list'>
        {rows}
      </ul>
    );
  }
}

export default ToDoList;