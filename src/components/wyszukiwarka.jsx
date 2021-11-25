import React,  { Component } from 'react';

class Wyszukiwarka extends Component {
    state = {};

    render(){
        return <div>
        <div class="input-group" style={{ float: 'left', marginTop: "40px", marginLeft: "200px", width: '400px'}}>
            <input type="search" class="form-control rounded" placeholder="Podaj nazwę filmu" aria-label="Podaj nazwę filmu"
             aria-describedby="search-addon" />
            <button type="button" class="btn btn-outline-primary">Wyszukaj</button>
        </div>
    </div>
    }
}

export default Wyszukiwarka;