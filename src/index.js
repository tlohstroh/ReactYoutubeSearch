import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyChJa4X6mWN71-mqiShCxXRgdHc03B3Huw';
// const API_KEY = process.env.YOUTUBE_API;
// YTSearch({key:API_KEY, term: 'surfboards'}, function(data) {
//   console.log(data);
// });


// create a new component
// some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key:API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos });
    });
  }

  render() {
    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// const App = () => {
//   return <div>
//     <SearchBar />
//   </div>
// }

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
