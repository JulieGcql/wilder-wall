import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import NotFound from './components/NotFound';
import JohnDoe from './components/wilders/JohnDoe/JohnDoe';
import JulienBertocchini from './components/wilders/JulienBertocchini/JulienBertocchini';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/john-doe" component={JohnDoe} />
        <Route exact path="/wilders/julien-bertocchini" component={JulienBertocchini} />
      </Switch>
    );
  }
}

export default App;
