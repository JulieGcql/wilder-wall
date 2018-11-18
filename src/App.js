import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import NotFound from './components/NotFound';
import JohnDoe from './components/wilders/JohnDoe/JohnDoe';
import MaximePochet from './components/wilders/MaximePochet/MaximePochet';
import AlexandraAndrade from './components/wilders/AlexandraAndrade/AlexandraAndrade';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/wilders/john-doe" component={JohnDoe} />
        <Route exact path="/wilders/maxime-pochet" component={MaximePochet} />
        <Route exact path="/wilders/alexandra-andrade" component={AlexandraAndrade}/>
        <Route path="/" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
