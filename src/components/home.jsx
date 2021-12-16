import React,  { Component } from 'react';
import Filmy from './filmy';
import { Link } from "react-router-dom";

class Home extends Component {
    state = {};

    render(){
        return <div style={{textAlign: 'center', display: "flex", flexWrap: "wrap", marginLeft: "4%", float: "left",
        justifyContent: "space-between"}}> <Filmy /> <Filmy /> <Filmy /> <Filmy /> <Filmy /> <Filmy /> <Filmy /> <Filmy />
        </div>
        }
    }

export default Home;