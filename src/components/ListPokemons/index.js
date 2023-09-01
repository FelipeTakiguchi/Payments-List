import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.scss';
import { PokemonsContext } from '../../context/Pokemons';

export default function ListPokemons() {
    const [pokemons, setPokemons] = useState([{name: "", url: ""}]);
    
    useEffect(() => {
        handleGet();
    }, []);

    async function handleGet() {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        console.log(res);
        setPokemons(res.data.results);
    };

    return (
        <>
            {
                pokemons.map(pokemon => {
                    console.log(pokemon)
                    return (
                        <li>
                            <a>{pokemon.name}</a>
                        </li>
                    )
                })
            }
        </>
    )
}