import React,  { Component } from 'react';
import { Link } from "react-router-dom";

class Rejestracja_formularz extends Component {
    state = {};

    render(){
        return <center> <div style={{width: "30%", marginTop: "15%"}}>
                    <form>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">Login</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Podaj login" />
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput2" class="form-label">Nazwa</label>
                        <input type="text" id="disabledTextInput2" class="form-control" placeholder="Podaj nazwę" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="text" id="exampleInputEmail1" class="form-control" placeholder="Podaj email" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Haslo</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Podaj hasło"/>
                      </div>
                      <button type="submit" class="btn btn-primary">Zarejestruj się</button>
                    </form>
               </div> </center>
    }
}

export default Rejestracja_formularz;