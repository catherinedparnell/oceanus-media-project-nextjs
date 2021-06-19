import React from 'react';
import '../style.scss';
import 'tailwindcss/tailwind.css';
import 'aos/dist/aos.css';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import EcologicalFlow from './flows/ecologicalFlow';
import HumanFlow from './flows/humanFlow';
import CombinedFlow from './flows/combinedFlow';
import Explore from './explore/home';
import Home from './home';
import Intro from './flows/introFlow';
import Plastic from './explore/plastic';
import Suzie from './explore/suzie';
import Health from './explore/health';
import Action from './explore/action';
import Methods from './explore/methods';
import ScrollToTop from './lib/scrollToTop';

const FallBack = (props) => {
  return (
    <div>URL not found.</div>
  );
};

const App = (props) => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/eco" component={EcologicalFlow} />
          <Route path="/human" component={HumanFlow} />
          <Route path="/future" component={CombinedFlow} />
          <Route exact path="/explore" component={Explore} />
          <Route path="/explore/plastic" component={Plastic} />
          <Route path="/explore/suzie" component={Suzie} />
          <Route path="/explore/health" component={Health} />
          <Route path="/explore/action" component={Action} />
          <Route path="/explore/methods" component={Methods} />
          <Route path="/intro" component={Intro} />
          <Route component={FallBack} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
