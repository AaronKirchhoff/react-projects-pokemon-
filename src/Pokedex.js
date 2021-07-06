import React, { Component } from 'react'
// interesting, after import you call this import any name, but it MUST be capitolized and used as uppercase thorughout this component. notice on line 27 I called it Pokecard
import Pokecard from './pokecard';
import './Pokedex.css';


class Pokedex extends Component{
    // static deafault props is like setting variable names for your props so you dont have to write the whole thing out everytime you want to call a prop. its helpful.
    // static defaultProps = { ... i mived the array of all the pokemon instances to pokegame for some reason.
    
    render(){
        let title;
        if(this.props.isWinner){
            title = <h1 className="Pokedex-winner">Winning Hand!</h1>
        } else {
            title = <h1 className="Pokedex-loser">Losing Hand!</h1>
        }

        return (
            <div className= "Pokedex">
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                {/* notice the below class name, its conventional to give a prefix of the parent div before naming it */}
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp= {p.base_experience} image= {p.img}/>
                    ))}

                </div>
            </div>
        )

    }
}

export default Pokedex;