import React, { Component } from 'react';
import Header from './header/header';
import About from './about/about';
import Projects from './projects/projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
