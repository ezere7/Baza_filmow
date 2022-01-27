import React,  { Component } from 'react';
import { Link } from "react-router-dom";
const axios = require('axios');

class Dodaj_film extends Component {
    state = {
        filmy: {
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

        const {filmy} = this.state;
        if (filmy.title.trim() === '') {
            errors.title = 'Uzupełnij pole';
        }
        if (filmy.image.trim() === '') {
            errors.image = 'Uzupełnij pole';
        }
        if (filmy.content.trim() === '') {
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
                title: this.state.filmy.title,
                image: this.state.filmy.image,
                content: this.state.filmy.content
            }
        }).then((response) => {
            this.handleChangeRoute();
        }).catch((error) => {
            const errors = {};
            errors.image = 'Błąd podczas tworzenia konta';
            this.setState({errors: errors || {}});
            console.log(error);
        });
    };

    handleChange = (event) => {
        const filmy = {...this.state.filmy};
        filmy[event.currentTarget.name] = event.currentTarget.value;
        this.setState({filmy});
    };

    render() {
        return (
            <div style={{width: "20%", position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group" style={{marginTop: "5%"}}>
                        <label htmlFor="title">Tytuł</label>
                        <input value={this.state.filmy.title}
                               name="title"
                               onChange={this.handleChange}
                               type="text"
                               className="form-control"
                               id="title"
                               aria-describedby="title"
                               placeholder="Tytuł"/>
                        {this.state.errors.title &&
                        <div className="alert alert-danger">{this.state.errors.title}</div>}
                    </div>
                    <div className="form-group" style={{marginTop: "5%"}}>
                        <label htmlFor="image">Zdjęcie</label>
                        <input value={this.state.filmy.image}
                               name="image"
                               onChange={this.handleChange}
                               type="text"
                               className="form-control"
                               id="image"
                               aria-describedby="image"
                               placeholder="Zdjęcie (adres URL)"/>
                        {this.state.errors.image &&
                        <div className="alert alert-danger">{this.state.errors.image}</div>}
                    </div>
                    <div className="form-group" style={{marginTop: "5%"}}>
                        <label htmlFor="text">Opis</label>
                        <textarea id="story" name="story" rows="5" cols="33" style={{width: "100%", padding: "10px", maxWidth: "100%",
                                lineHeight: "1.5", borderRadius: "5px", border: "1px solid #ccc"}} value={this.state.filmy.content}
                               name="content"
                               onChange={this.handleChange}
                               type="text"
                               className="form-control"
                               id="content"
                               placeholder="Opis"/>
                        {this.state.errors.content &&
                        <div className="alert alert-danger">{this.state.errors.content}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary" style={{marginLeft: "30%", marginTop: "10%"}}>Dodaj film</button>
                </form>

            </div>
        );
    }
}

export default Dodaj_film;