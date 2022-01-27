import React, { Component } from 'react';
import { Link } from "react-router-dom";
const axios = require('axios');

class Dodaj_film_serwer extends Component {
   state = {
       movie: {
           title: "",
           image: "",
           content: ""
       },
       errors: {}
   };

   handleChangeRoute = () => {
       window.location.reload();
   };

   validate = () => {
       const errors = {};

       const {movie} = this.state;
       if (movie.title.trim() === '') {
           errors.title = 'Uzupełnij pole';
       }
       if (movie.image.trim() === '') {
           errors.image = 'Uzupełnij pole';
       }
       if (movie.content.trim() === '') {
           errors.content = 'Uzupełnij pole';
       }

       return Object.keys(errors).length === 0 ? null : errors;
   };

   handleSubmit = (event) => {
       event.preventDefault();

       const errors = this.validate();
       this.setState({errors: errors || {}});
       if (errors) return;

       console.log(this.state)

       axios({
           method: 'post',
           url: 'https://pr-movies.herokuapp.com/api/movies',
           data: {
               title: this.state.movie.title,
               image: this.state.movie.image,
               content: this.state.movie.content
           }
       }).then((response) => {
           this.handleChangeRoute();
       }).catch((error) => {
           const errors = {};
           errors.image = 'Invalid data!';
           this.setState({errors: errors || {}});
           console.log(error);
       });
   };

   handleChange = (event) => {
       const movie = {...this.state.movie};
       movie[event.currentTarget.name] = event.currentTarget.value;
       this.setState({movie});
   };


    render(){
        return <div style={{display: "flex",
                            zIndex: -1,
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            backgroundImage: "linear-gradient(to right bottom, #FF4444, orange, #FF4444)",
                            position: "fixed",
                            }}>
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.4)",
                            display: "flex",
                            zIndex: -1,
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            padding: 70,
                            paddingTop: 110,
                            paddingBottom: 110,
                            flexWrap: "wrap",
                            flexDirection: "column",
                            position: "fixed",
                            overflow: "scroll",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            rowGap: 50,
                            }}>

               <form onSubmit={this.handleSubmit} style={{width: "30%"}}>
                   <div className="form-group">
                       <label htmlFor="username" style={{color: "white"}} class="form-label">Tytuł</label>
                       <input value={this.state.movie.title}
                              name="title"
                              onChange={this.handleChange}
                              type="text"
                              className="form-control"
                              id="title"
                              aria-describedby="emailHelp"
                              placeholder="Tytuł"/>
                       {this.state.errors.title &&
                       <div className="alert alert-danger">{this.state.errors.title}</div>}
                   </div>
                   <div className="form-group">
                       <label htmlFor="password" style={{color: "white"}} class="form-label">URL obrazu</label>
                       <input value={this.state.movie.image}
                              name="image"
                              onChange={this.handleChange}
                              type="text"
                              className="form-control"
                              id="image"
                              placeholder="URL obrazu"/>
                       {this.state.errors.image &&
                       <div className="alert alert-danger">{this.state.errors.image}</div>}
                   </div>
                   <div className="form-group">
                       <label htmlFor="email" style={{color: "white"}} class="form-label">Opis</label>
                       <textarea value={this.state.movie.content}
                              name="content"
                              onChange={this.handleChange}
                              type="text"
                              className="form-control"
                              id="content"
                              aria-describedby="emailHelp"
                              placeholder="Opis"
                              rows="10"/>
                       {this.state.errors.content &&
                       <div className="alert alert-danger">{this.state.errors.content}</div>}
                   </div>
                   <button type="submit" class="btn btn-primary" style={{backgroundColor: "orange", borderStyle: "none", width: "100%", marginTop: 32}}>Add movie!</button>
               </form>

            </div>
        </div>
    }
}

export default Dodaj_film_serwer;