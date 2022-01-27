import React,  { Component } from 'react';
import { Link } from "react-router-dom";
const axios = require('axios');

class Logowanie_formularz extends Component {
    state = {
        account: {
            username: "",
            password: ""
        },
        errors: {}
    };

    handleChangeRoute = () => {
        window.location.reload();
    };

    validate = () => {
      const errors = {};

      const { account } = this.state;
      if (account.username.trim() === '') {
          errors.username = 'Uzupełnij pole';
      }
      if (account.password.trim() === '') {
          errors.password = 'Uzupełnij pole!';
      }

      return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;
        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/auth',
            data: {
                login: this.state.account.username,
                password: this.state.account.password
            }
        }).then((response) => {
            console.log(response);
            localStorage.setItem('token', response.data.token);
            this.handleChangeRoute();
        }).catch((error) => {
            const errors = {};
            errors.password = 'Podany użytkownik nie istnieje lub hasło jest błędne';
            this.setState({errors: errors || {}});
            console.log(error);
        });

        console.log("submit - np. zapytanie do serwera");
    };

    handleChange = (event) => {
        const account = {...this.state.account};
        account[event.currentTarget.name] = event.currentTarget.value;
        this.setState({account});
    };

    render() {
        return (
            <div style={{width: "20%",position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Login</label>
                        <input value={this.state.account.username}
                               name="username"
                               onChange={this.handleChange}
                               type="text"
                               className="form-control"
                               id="username"
                               aria-describedby="emailHelp"
                               placeholder="Login"/>
                        {this.state.errors.username &&
                        <div className="alert alert-danger">{this.state.errors.username}</div>}
                    </div>
                    <div className="form-group" style={{marginTop: "5%"}}>
                        <label htmlFor="password">Hasło</label>
                        <input value={this.state.account.password}
                               name="password"
                               onChange={this.handleChange}
                               type="password"
                               className="form-control"
                               id="password"
                               placeholder="Hasło"/>
                        { this.state.errors.password && <div className="alert alert-danger">{this.state.errors.password}</div> }
                    </div>
                        <button type="submit" className="btn btn-primary" style={{marginLeft: "32%", marginTop: "10%"}}>Zaloguj się</button>
                </form>

            </div>
        );
    }
}

export default Logowanie_formularz;