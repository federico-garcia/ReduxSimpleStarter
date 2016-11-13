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
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  // in order to properly use `this`, you need to define methods using the
  // arrow function syntax. why? Arrow functions capture the `this` value of the
  // enclosing context
  onInputChange = (term) => {
    this.setState({
      term: term
    });
    this.props.onSearchByTerm(term);
    //console.log(event.target.value);
  }
}

export default SearchBar;