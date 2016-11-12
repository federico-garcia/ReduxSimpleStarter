import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAsOlz2JKzNaBMeUWw9CJdXhla3wXG13OQ';

// Create a react Component
// conts App = function() { Equal to const App = () => {
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Add the components generated HTML to the DOM
// We need to pass an instance of the component's class. <component-name />
ReactDom.render(<App />, document.querySelector('.container'));