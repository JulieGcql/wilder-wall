import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Wall from "./components/wall"
import NotFound from "./components/NotFound";
import JohnDoe from "./components/wilders/JohnDoe/JohnDoe";
import RebeccaSenechal from './components/wilders/RebeccaSenechal/RebeccaSenechal.jsx';
import ChristelleChatroux from "./components/wilders/ChristelleChatroux/ChristelleChatroux";
import LydiaDali from './components/wilders/LydiaDali/LydiaDali';
import MaximePochet from './components/wilders/MaximePochet/MaximePochet';
import JulieLucanik from './components/wilders/JulieLucanik/JulieLucanik';
import JulieGicquel from './components/wilders/JulieGicquel/JulieGicquel';
import Marechal from './components/wilders/Marechal/Marechal';
import JulienBertocchini from './components/wilders/JulienBertocchini/JulienBertocchini';
import TranzerMathias from './components/wilders/TranzerMathias/TranzerMathias';
import ArvisHugo from'./components/wilders/ArvisHugo/ArvisHugo';
class App extends Component {
  render() {
    return (


      
      <Switch>
        <Route exact path="/wilders/teams" component={Wall} />
        <Route exact path="/wilders/john-doe" component={JohnDoe} />
        <Route exact path="/wilders/rebecca-senechal" component={RebeccaSenechal} />
        <Route exact path="/wilders/christelle-chatroux" component={ChristelleChatroux} />
        <Route exact path="/wilders/lydia-dali" component={LydiaDali} />
        <Route exact path="/wilders/maxime-pochet" component={MaximePochet} />
        <Route exact path="/wilders/julie-lucanik" component={JulieLucanik} />
        <Route exact path="/wilders/julie-gicquel" component={JulieGicquel} />
        <Route exact path="/wilders/clemence-marechal" component={Marechal} />
        <Route exact path="/wilders/julien-bertocchini" component={JulienBertocchini} />
        <Route exact path="/wilders/Mathias-Tranzer" component={TranzerMathias} />
        <Route exact path="/wilders/hugo-arvis" component={ArvisHugo} />
        <Route path="/" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
