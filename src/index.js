import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YouTubeSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyAsOlz2JKzNaBMeUWw9CJdXhla3wXG13OQ';

// Create a react Component
// conts App = function() { Equal to const App = () => {
/*const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}*/
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searchByTerm('Michael Jackson');

  }

  searchByTerm = (term) => {
    YouTubeSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchByTerm={(term) => this.searchByTerm(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={(Video) => this.setState({selectedVideo: Video})} videos={this.state.videos} />
      </div>
    );
  }
}

// Add the components generated HTML to the DOM
// We need to pass an instance of the component's class. <component-name />
ReactDom.render(<App />, document.querySelector('.container'));