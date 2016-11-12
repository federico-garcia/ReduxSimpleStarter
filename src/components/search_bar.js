import React, {Component} from 'react';

//const SearchBar = () => {
//  return <input />;
//}

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={this.onInputChange} />
      </div>
    );
  }

  // in order to properly use `this`, you need to define methods using the
  // arrow function syntax. why? Arrow functions capture the `this` value of the
  // enclosing context
  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    });
    console.log(event.target.value);
  }
}

export default SearchBar;