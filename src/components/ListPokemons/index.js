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

        setPokemons(res.results);
    };

    return (
        <>
            {
                pokemons.map(pokemon => {
                    return (
                        <a>{pokemon}</a>
                    )
                })
            }
        </>
    )
}