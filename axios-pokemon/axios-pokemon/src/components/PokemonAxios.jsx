import React, { useState } from 'react';
import axios from 'axios';

const PokemonAxios = ()=> {

    let [listOfPokemon, setListOfPokemon] = useState([]);

    const getPokemon = ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/")

            .then(response=>{
            console.log('Response from API', response.data);
            setListOfPokemon(response.data.results);
        })

        .catch(err=>{
            console.log('error', err);
        })
    }

    return(
        <>
        <p><button className='btn btn-primary' onClick={getPokemon}>Fetch Pokemon</button></p>
        
        {
            listOfPokemon.map((pokemonObj, i)=>{
                return(
                    <div key = {i}>
                        <h3>{pokemonObj.name}</h3>
                    </div>
                )
            })
        }

        </>
    )
}

export default PokemonAxios;