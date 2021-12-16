import React,  { Component } from 'react';
import { Link } from "react-router-dom";

class Rejestracja extends Component {
    state = {};

    render(){
        return <div style={{ float: 'right', marginTop: "30px", marginRight: "10px", cursor: "pointer"}}>
        <Link to="/signup">
            <button type="button" class="btn btn-secondary btn-lg" disabled>Rejestracja</button>
        </Link>
               </div>
    }
}

export default Rejestracja;