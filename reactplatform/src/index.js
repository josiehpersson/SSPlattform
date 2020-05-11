import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Pages/LoginPages/LogIn';
import Forgot from './Pages/LoginPages/ForgotPassword';
import Register from './Pages/LoginPages/Register';
import Start from './Pages/StartPage/StartPage';
import Företag from './Pages/Företagssida/Företagssida';
import Konsult from './Pages/Konsultsida/Konsultsida';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/forgot" component={Forgot} />
      <Route path="/register" component={Register} />
      <Route path="/start" component={Start} />
      <Route path="/företag" component={Företag} />
      <Route path="/konsult" component={Konsult} />
    </Switch>
  </BrowserRouter>,
  rootElement
);
