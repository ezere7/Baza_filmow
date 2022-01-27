import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home'
import Naglowek from './components/naglowek'
import Stopka from './components/stopka'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Logowanie_formularz from './components/logowanie_formularz'
import Rejestracja_formularz from './components/rejestracja_formularz'
import Dodaj_film from './components/dodaj_film'
import Przycisk_dodaj from './components/przycisk_dodaj'
import Szczegoly_filmu from './components/szczegoly_filmu'

ReactDOM.render(
<BrowserRouter>
      <React.StrictMode>
        <div style={{width: "100%", zIndex: 1, backgroundColor: "black"}}>
            <Naglowek />
        </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signin' element={<Logowanie_formularz />} />
                    <Route path='/signup' element={<Rejestracja_formularz />} />
                    <Route path='/add' element={<Dodaj_film />} />
                    <Route path='/details/:id' element={<Szczegoly_filmu />} />
                </Routes>
        <Stopka />
      </React.StrictMode>
</BrowserRouter>,
  document.getElementById('root')
);