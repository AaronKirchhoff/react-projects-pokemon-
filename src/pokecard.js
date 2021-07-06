import React, {Component} from 'react';
import './pokecard.css';
// const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

// this line of code changes the id number given to a three digit number. we do this because of the img source http requirments. can always get images from somewhere else though.
let padToThree = (number) => (number <= 999 ? `00${number}` .slice(-3): number);


// so here is our pokecar component. it needs to accept props anytime we want to call the component right? like it has parameters to function. anytime we call this component in our App.js we need to pass arguments, or props. so in App.js we give props, here in the component pokecard, we receive props.

// 7/6/21 also for a class we write `extends Component`, because we want to extend from a react component, this way our app knows this is a component and will act the way we want it to. it builds off the compnent class already in our react app, we just specify what we put in it.
class Pokecard extends Component {
    render() {
        // back ticks `` means interpolate ??
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img src= {imgSrc} alt={this.props.name}/>
                    {/* <img src={this.props.image}/> */}
                </div>
                <div className="Pokecard-data"> Type: {this.props.type} </div>
                <div className="Pokecard-data"> Experience: {this.props.exp} </div>
                <div className="Pokecard-data"> Creature ID: {this.props.id} </div>

            </div>
        )
    }
}

export default Pokecard;