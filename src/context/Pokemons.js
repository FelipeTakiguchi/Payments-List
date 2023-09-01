import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PokemonsContext = React.createContext();
PokemonsContext.displayName = 'Pokemons';

export const PokemonsProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [index, setIndex] = useState("");
    const [evolution, setEvolution] = useState("");
    const [type, setType] = useState("");

    const navigate = useNavigate();

    function setPokemon(name, index, evolution, type){
        if(!name || !index || !evolution || !type){
            return null;
        }

        setName(name);
        setIndex(index);
        setEvolution(evolution);
        setType(type);

        navigate("/describePokemon");
    }
 
    return(
        <PokemonsContext.Provider
            value={{
                name, index, evolution, type,
                setName, setIndex, setEvolution, setType,
                setPokemon,
            }}
        >
            {children}
        </PokemonsContext.Provider>
    )
}