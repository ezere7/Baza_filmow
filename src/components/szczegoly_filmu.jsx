import React,  { Component } from 'react';
import { Link } from "react-router-dom";

class Szczegoly_filmu extends Component {
   constructor(props) {
       super(props);
       this.state = {
           error: null,
           isLoaded: false,
           details: [],
       };
   }


   componentDidMount() {
       fetch("https://pr-movies.herokuapp.com/api/movies/" + window.location.pathname.substring(9))
           .then(res => res.json())
           .then(
               (result) => {
                   this.setState({
                       isLoaded: true,
                       details: result
                   });
                   console.log(result)
               },
               (error) => {
                   this.setState({
                       isLoaded: true,
                       error
                   });
               }
           )
   }



    render(){
        return <div style={{float: "left", marginTop: "15%", marginLeft: "3%", justifyContent: "center"}}>
                    <div style={{float: "left",display: "flex", flexDirection: "row"}}>
                        <img src={this.state.details.image} style={{width: "300px", height:"400px"}}></img>

                    <div style={{float: "left", marginTop: "0", marginLeft: "3%"}}>
                         <h3>{this.state.details.title}</h3>
                         <p>{this.state.details.content}</p>
                    </div>
                    </div>
                </div>
    }
}

export default Szczegoly_filmu;