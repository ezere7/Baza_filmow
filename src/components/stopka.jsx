import React,  { Component } from 'react';

class Stopka extends Component {
    state = {};

    render(){
        return <div style={{position: "fixed", bottom: "0", right: "0", width: "100%", textAlign: 'center'}}>
                  <p>Mariusz Kurek - Projekt ©</p>
               </div>
    }
}

export default Stopka;