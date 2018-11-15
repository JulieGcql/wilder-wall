import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import NotFound from './components/NotFound';
import JohnDoe from './components/wilders/JohnDoe/JohnDoe';
import LydiaDali from './components/wilders/LydiaDali/LydiaDali';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/wilders/john-doe" component={JohnDoe} />
        <Route exact path="/wilders/lydia-dali" component={LydiaDali} />
        <Route path="/" component={NotFound} />
        
      </Switch>
    );
  }
}

export default App;
