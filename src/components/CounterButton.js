import React, { Component } from 'react';

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    if (this.state.count !== nextProps.count) return true;
    return false;
  }

  updateCount = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };
  render() {
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        UpdateCount: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
