import React,  { Component } from 'react';
import { Link } from "react-router-dom";

class Logowanie extends Component {
    state = {};

    render(){
        return <div style={{ float: 'right', marginTop: "30px", marginRight: "10px", cursor: "pointer"}} >
        <Link to="/signin">
            <button type="button" class="btn btn-lg btn-primary" disabled > Logowanie </button>
        </Link>
               </div>
    }
}

export default Logowanie;