import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Logo from './components/logo'
import Wyszukiwarka from './components/wyszukiwarka'
import Rejestracja from './components/rejestracja'
import Logowanie from './components/logowanie'
import Stopka from './components/stopka'
import Filmy from './components/filmy'

ReactDOM.render(
  <React.StrictMode>
    <div>
        <Logo />
    </div>
    <Wyszukiwarka />
    <Rejestracja />
    <Logowanie />
    <div style={{textAlign: 'center', display: "flex", flexWrap: "wrap", marginLeft: "4%", float: "left", justifyContent: "space-between"}}> <Filmy /> <Filmy /> <Filmy /> <Filmy /> <Filmy /> <Filmy /> </div>
    <Stopka />
  </React.StrictMode>,
  document.getElementById('root')
);