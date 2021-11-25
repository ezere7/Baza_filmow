import React,  { Component } from 'react';

class Logowanie extends Component {
    state = {};

    render(){
        return <div style={{ float: 'right', marginTop: "30px", marginRight: "10px"}}>
            <button type="button" class="btn btn-lg btn-primary" disabled>Logowanie</button>
               </div>
    }
}

export default Logowanie;