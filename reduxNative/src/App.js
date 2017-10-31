import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Root from './components/RootScreen/index';

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Root} title="SampleApp" initial />
    </Scene>
  </Router>
);
