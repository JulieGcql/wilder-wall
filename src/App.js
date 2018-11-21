import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Wall from "./components/wall"
import NotFound from "./components/NotFound";
import JohnDoe from "./components/wilders/JohnDoe/JohnDoe";
import AloysGrimaldi from './components/wilders/AloysGrimaldi/AloysGrimaldi';
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
import AlexandraAndrade from './components/wilders/AlexandraAndrade/AlexandraAndrade';
import JobStephane from './components/wilders/JobStephane/JobStephane';
import LisaFerrier from './components/wilders/LisaFerrier/LisaFerrier'
import IssamElagrebi from './components/wilders/IssamElagrebi/IssamElagrebi';

class App extends Component {
  render() {
    return (      
      <Switch>
        <Route exact path="/wilders/team" component={Wall} />
        <Route exact path="/wilders/john-doe" component={JohnDoe} />
        <Route exact path="/wilders/aloys-grimaldi" component={AloysGrimaldi} />
        <Route exact path="/wilders/rebecca-senechal" component={RebeccaSenechal} />
        <Route exact path="/wilders/julie-lucanik" component={JulieLucanik} />
        <Route exact path="/wilders/julie-gicquel" component={JulieGicquel} />
        <Route exact path="/wilders/julien-bertocchini" component={JulienBertocchini} />
        <Route exact path="/wilders/clemence-marechal" component={Marechal} />
        <Route exact path="/wilders/christelle-chatroux" component={ChristelleChatroux} />
        <Route exact path="/wilders/lydia-dali" component={LydiaDali} />
        <Route exact path="/wilders/maxime-pochet" component={MaximePochet} />
        <Route exact path="/wilders/mathias-tranzer" component={TranzerMathias} />
        <Route exact path="/wilders/hugo-arvis" component={ArvisHugo} />
        <Route exact path="/wilders/alexandra-andrade" component={AlexandraAndrade}/>
        <Route exact path="/wilders/stephane-job" component={JobStephane}/>
        <Route exact path="/wilders/lisa-ferrier" component={LisaFerrier} />
        <Route exact path="/wilders/issam-el_agrebi" component={IssamElagrebi} />
        <Route path="/" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
