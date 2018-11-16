import React, { Component } from 'react';

class ToDoList extends Component {
  render() {
    const rows = this.props.todos.map((el, index) => {
      return (
        <li key={index} className='list-item'>
          <input 
            type='checkbox' 
            checked={el.isChecked ? 'checked': ''}
            onChange={() => {this.props.checkItem(index)}}  
          />
          <span className='item-text'>{el.title}</span>
          <span className='item-status'>
            {el.isChecked ? 'Done!' : 'Not done'}
          </span>
          <span className='remove-item' onClick={() => { this.props.removeItem(index) }}>&times;</span>
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