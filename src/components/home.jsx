import  React, { Component } from 'react';
import Filmy from './filmy';


class Home extends Component {
 constructor(props) {
       super(props);
       this.state = {
           error: null,
           isLoaded: false,
           items: []
       };
   }

   componentDidMount() {
       fetch("https://pr-movies.herokuapp.com/api/movies")
           .then(res => res.json())
           .then(
               (result) => {
                   this.setState({
                       isLoaded: true,
                       items: result
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

   render() {
   const { items } = this.state;

       return ( <div > <Filmy
                 items={items}/> </div>
)
   }
}


export default Home;