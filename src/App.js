import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Wall from "./components/wall"
import NotFound from "./components/NotFound";
import JohnDoe from "./components/wilders/JohnDoe/JohnDoe";
import ChristelleChatroux from "./components/wilders/ChristelleChatroux/ChristelleChatroux";
import LydiaDali from './components/wilders/LydiaDali/LydiaDali';
import MaximePochet from './components/wilders/MaximePochet/MaximePochet';
import JulieLucanik from './components/wilders/JulieLucanik/JulieLucanik';
import JulieGicquel from './components/wilders/JulieGicquel/JulieGicquel';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/wilders/teams" component={Wall} />
        <Route exact path="/wilders/john-doe" component={JohnDoe} />
        <Route exact path="/wilders/christelle-chatroux" component={ChristelleChatroux} />
        <Route exact path="/wilders/lydia-dali" component={LydiaDali} />
        <Route exact path="/wilders/maxime-pochet" component={MaximePochet} />
        <Route exact path="/wilders/julie-lucanik" component={JulieLucanik} />
        <Route exact path="/wilders/julie-gicquel" component={JulieGicquel} />
        <Route path="/" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
