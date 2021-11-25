import React,  { Component } from 'react';
import logo from './logo.png';

class Logo extends Component {
    state = {};

    render(){
        return <img src={logo} style={{ float: 'left'}} />
    }
}

export default Logo;