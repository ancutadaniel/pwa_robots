import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import './Homepage.css';

class Homepage extends Component {
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

  filteredRobots = () => {
    return this.props.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, isPending } = this.props;

    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <label></label>
        <input
          id='color1'
          type='color'
          name='color1'
          onChange={this.setColor}
          value='#ffffff'
        />
        <label></label>
        <input
          id='color2'
          type='color'
          name='color1'
          onChange={this.setColor1}
          value='#ffffff'
        />
        <Scroll color1={this.state.color1} color2={this.state.color2}>
          <CardList robots={this.filteredRobots()} />
        </Scroll>
      </div>
    );
  }
}

export default Homepage;
