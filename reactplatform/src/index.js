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
import Inställningar from './Pages/Inställningarsida/Inställningar';
import Statistik from './Pages/Statistiksida/Statistiksida';
import Åtkomst from './Pages/Åtkomst/Åtkomst';
import App from './App';

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
      <Route path="/faktura" component={Faktura} />
      <Route path="/uppdrag" component={Uppdrag} />
      <Route path="/tidrapport" component={Tidrapport} />
      <Route path="/tidrapportdetalj" component={TidrapportDetalj} />
      <Route path="/inställningar" component={Inställningar} />
      <Route path="/statistik" component={Statistik} />
      <Route path="/åtkomst" component={Åtkomst} />
    </Switch>
  </BrowserRouter>,
  rootElement
);
