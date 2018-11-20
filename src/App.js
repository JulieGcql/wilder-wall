import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import NotFound from './components/NotFound';
import JohnDoe from './components/wilders/JohnDoe/JohnDoe';
import IssamElagrebi from './components/wilders/IssamElagrebi/IssamElagrebi';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/wilders/john-doe" component={JohnDoe} />
        <Route exact path="/wilders/issam-elagrebi" component={IssamElagrebi} />
        <Route path="/" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
