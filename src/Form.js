import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      title: '',
      isChecked: false
    }

    this.state = this.initialState;
  }

  handleChange = e => {
    const { value } = e.target;

    this.setState({
      title: value
    });
  }

  handleSubmit = e => {
    this.props.addItem(this.state);
    this.setState(this.initialState);
  }

  render() {
    return (
      <form id="form" onSubmit={e => e.preventDefault()}>
        <input 
          type="text" 
          value={this.state.title} 
          name="title" 
          onChange={this.handleChange} 
        />
        <button 
          type="button"
          onClick={this.handleSubmit}
        >Add</button>
      </form>
    );
  }
}

export default Form;