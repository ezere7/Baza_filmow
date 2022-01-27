import React, {Component} from "react";
import { isExpired, decodeToken  } from "react-jwt";
import {Link} from "react-router-dom";
import Logo from './logo';
import Wyszukiwarka from './wyszukiwarka';
import Rejestracja from './rejestracja';
import Logowanie from './logowanie';
import Przycisk_dodaj from './przycisk_dodaj';


const Naglowek = () => {

    const user = decodeToken(localStorage.getItem('token'));
    const isNotLoggedIn = isExpired(localStorage.getItem('token'));

    return (
        <div style={{position: "fixed", zIndex: 1, backgroundColor: "white", width: "95%", float:"left", height: "17%"}}>

            {user && <h5 style={{float: 'left', marginTop: '2%', marginLeft: '1%', marginRight: '1%'}}>Użytkownik:<br/> {user.name}</h5>}
            <div>

                                <Logo />

                             </div>
                             <div style={{width: "40%",
                                              height: "7%",
                                              float: "left",
                                              position: "relative",
                                              top: 0,
                                              left: 0,
                                              textAlign: "left",
                                              marginTop: "15px",
                                              marginLeft: "25px",
                                              }}>

                                                  <Wyszukiwarka />

                                              </div>
                    <ul style={{ height: "7%",
                                         float: "right",
                                         position: "relative",
                                         top: 0,
                                         right: 0,
                                         textAlign: "center",
                                         marginTop: "10px",
                                         marginRight: "10px"}} className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        {isNotLoggedIn && <li className="nav-item" role="presentation">
                            <Logowanie />
                        </li>}
                        {isNotLoggedIn && <li className="nav-item" role="presentation">
                            <Rejestracja />
                        </li>}
                        {!isNotLoggedIn && <li className="nav-item" role="presentation">
                            <a href="/" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                                  aria-controls="pills-home" aria-selected="true" onClick={() => localStorage.removeItem('token')}>Wyloguj</a>
                        </li>}
                        {!isNotLoggedIn && <li className="nav-item" role="presentation">
                            <div style={{position: "relative", zIndex: "1"}}>
                             <Przycisk_dodaj />
                            </div>
                        </li>}
                    </ul>
                </div>

    );
};

export default Naglowek;