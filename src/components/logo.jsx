import React,  { Component } from 'react';
import logo from './logo.png';
import { Link } from "react-router-dom";

class Logo extends Component {
    state = {};

    render(){
        return <Link to="/"> <img src={logo} style={{ float: 'left'}} /> </Link>
    }
}

export default Logo;