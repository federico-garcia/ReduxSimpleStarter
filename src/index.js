import React from 'react';
import ReactDom from 'react-dom';

// Create a react Component
// conts App = function() { Equal to const App = () => {
const App = () => {
  return <div>Hi There Arrow functions!</div>;
}

// Add the components generated HTML to the DOM
// We need to pass an instance of the component's class. <component-name />
ReactDom.render(<App />, document.querySelector('.container'));