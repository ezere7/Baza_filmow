import React,  { Component } from 'react';
import { Link } from "react-router-dom";

class Dodaj_film extends Component {
    state = {};

    render(){
        return <div style={{width: "20%", position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
                    <div class="row">
                      <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Tytuł filmu" />
                      </div>
                      <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Rok produkcji" />
                      </div>
                    </div>
                        <label for="story" >Krótki opis</label>
                        <textarea id="story" name="story" rows="5" cols="33" style={{width: "100%", padding: "10px",
                          maxWidth: "100%", lineHeight: "1.5", borderRadius: "5px", border: "1px solid #ccc"}} >
                        </textarea>
                </div>
    }
}

export default Dodaj_film;