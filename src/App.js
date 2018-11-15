import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import NotFound from './components/NotFound';
import AloysGrimaldi from './components/wilders/AloysGrimaldi/AloysGrimaldi';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/wilders/aloys-grimaldi" component={AloysGrimaldi} />
        <Route path="/" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
