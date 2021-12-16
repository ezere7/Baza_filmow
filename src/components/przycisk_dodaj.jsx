import React,  { Component } from 'react';
import { Link } from "react-router-dom";

class Przycisk_dodaj extends Component {
    state = {};

    render(){
        return <button type="button" class="btn btn-outline-primary" style={{width: "80px", height: "80px",
        borderRadius: "100%", position: "fixed", right: "5%", bottom: "5%"}} >
        <span><h1>+</h1></span></button>
    }
}

export default Przycisk_dodaj;