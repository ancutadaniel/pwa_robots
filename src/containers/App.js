import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import './App.css';

import { requestRobots, setSearchField } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: '',
      color2: '',
    };
    this.setColor = this.setColor.bind(this);
    this.setColor1 = this.setColor1.bind(this);
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }

  setColor(event) {
    this.setState({ color1: event.target.value });
  }

  setColor1(event) {
    this.setState({ color2: event.target.value });
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <input
          type='color'
          name='color1'
          onChange={this.setColor}
          value='#ffffff'
        />
        <input
          type='color'
          name='color1'
          onChange={this.setColor1}
          value='#ffffff'
        />
        <Scroll color1={this.state.color1} color2={this.state.color2}>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
