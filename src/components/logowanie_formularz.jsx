import React,  { Component } from 'react';
import { Link } from "react-router-dom";

class Logowanie_formularz extends Component {
    state = {};

    render(){
        return <center> <div style={{width: "20%",position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
                    <form>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Login</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Podaj login" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Haslo</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Podaj hasło"/>
                      </div>
                      <button type="submit" class="btn btn-primary">Zaloguj się</button>
                    </form>
               </div> </center>
    }
}

export default Logowanie_formularz;