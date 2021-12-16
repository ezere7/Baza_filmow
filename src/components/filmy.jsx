import React,  { Component } from 'react';
import { Link } from "react-router-dom";

class Filmy extends Component {
    state = {};

    render(){
        return <div style={{marginRight: "2%", float: "left", justifyContent: "center", display: "flex", float: "left", marginTop: "230px"}}>
        <div class="card" style={{width: "18rem"}}>
          <img class="card-img-top" src="https://fwcdn.pl/fpo/10/48/1048/6925401.3.jpg" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Skazani na Shawshank</h5>
            <p class="card-text">Adaptacja opowiadania Stephena Kinga. Niesłusznie skazany na dożywocie bankier, stara się przetrwać w brutalnym, więziennym świecie.</p>
            <Link to="/details">
            <a href="#" class="btn btn-primary">Pokaż szczegóły</a>
            </Link>
          </div>
        </div>
        </div>
    }
}

export default Filmy;