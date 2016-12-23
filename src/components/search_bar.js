// import React from 'react';
import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />;// React.createElement
// };

// define a new class called SearchBar and give it access to all of the
// functionality that React.Component has.
// (Give our searchbar a punch of functionality from the React.Component class.)
// class SearchBar extends React.Component{
class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    // return <input onChange={this.onInputChange} />
    return (
      <div>
        <input
        value ={this.state.term}
        onChange={ event => this.setState({term: event.target.value})} />
        {/* Value of the input: { this.state.term } */}
      </div>
    )
  }

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
