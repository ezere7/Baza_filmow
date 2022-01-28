import  React, { Component } from 'react';
import { Link } from "react-router-dom";

const Filmy = ( props ) => {

        const { items } = props;

        return ( <div style={{display: "flex",zIndex: -1,width: "100%",height: "100%",position: "absolute",padding: 30,
                             paddingTop: 50, paddingBottom: 50,flexWrap: "wrap",flexDirection: "row",position: "fixed",
                             overflow: "scroll",justifyContent: "space-evenly",rowGap: 50}}>

        {items.map((item, key) =>
            (
                                <div class="card" style={{width: "18rem", marginTop: "6%" }}>
                                  <img src= {item.image} class="card-img-top" alt="Brak zdjęcia do tego filmu" />
                                  <div class="card-body">
                                    <h5 class="card-title">{item.title}</h5>
                                    <p class="card-text">{item.content}</p>
                                    <Link to={"details/"+item.id}><a href="#" class="btn btn-primary">Pokaż szczegóły</a></Link>
                                  </div>
                                </div>))}
                              </div> )

}

export default Filmy;