import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import NotFound from './components/NotFound';
import JohnDoe from './components/wilders/JohnDoe/JohnDoe';
import TranzerMathias from './components/wilders/TranzerMathias/TranzerMathias';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/wilders/Mathias-Tranzer" component={TranzerMathias} />
        <Route path="/wilders/john-doe" component={JohnDoe} />
        <Route path="/" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
