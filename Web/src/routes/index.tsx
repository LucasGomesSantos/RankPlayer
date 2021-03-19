import React from 'react';
import {
    Switch,
    Route,
  } from 'react-router-dom';

  import MainPage from '../pages/MainPage';
  import Ranking from '../components/Ranking';

  const routes: React.FC = () => (
  <Switch>
      <Route path="/" exact component={MainPage}></Route>
      <Route path="/Ranking" exact component={Ranking}></Route>
  </Switch>    
  );

  export default routes;
