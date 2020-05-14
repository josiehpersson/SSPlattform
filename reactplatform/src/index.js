import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Pages/LoginPages/LogIn';
import Forgot from './Pages/LoginPages/ForgotPassword';
import Register from './Pages/LoginPages/Register';
import Start from './Pages/StartPage/StartPage';
import Företag from './Pages/Företagssida/Företagssida';
import Konsult from './Pages/Konsultsida/Konsultsida';
import Faktura from './Pages/Fakturasida/Fakturasida';
import Uppdrag from './Pages/Uppdragssida/Uppdragssida';
import Tidrapport from './Pages/Tidrapportsida/Tidrapportsida';
import TidrapportDetalj from './Pages/Tidrapportsida/Detaljtidrappsida';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route path="/forgot" component={Forgot} />
      <Route path="/register" component={Register} />
      <Route path="/start" component={Start} />
      <Route path="/företag" component={Företag} />
      <Route path="/konsult" component={Konsult} />
      <Route path="/faktura" component={Faktura} />
      <Route path="/uppdrag" component={Uppdrag} />
      <Route path="/tidrapport" component={Tidrapport} />
      <Route path="/tidrapportdetalj" component={TidrapportDetalj} />
    </Switch>
  </BrowserRouter>,
  rootElement
);
