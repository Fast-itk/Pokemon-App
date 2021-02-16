import React, {useContext, useEffect} from 'react'

import Loading from '../../components/Loading/Loading'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { PokemonsContext } from '../../context/pokemons/pokemonsContext'
import cls from './HomePage.module.scss'



const HomePage = () => {

    const home = useContext(PokemonsContext)
    const {getPokemons, pokemons, loading} = home

    useEffect(() => {
        getPokemons()
    }, [])

    if (loading) {
        return (
            <div className={cls.load}>
                <Loading />
            </div>
        )
    }

    const pokemonsList = pokemons.map((pokemon, index) => {
        return (
            <PokemonCard
                key={index}
                name={pokemon.name}
                image={pokemon.image}
            />
        )
    })

    return (
        <div className={cls.HomePage}>
            <h1>Список Покемонов</h1>

            <div className={cls.pokemons}>
                { pokemonsList }
            </div>
        </div>
    )
}

export default HomePage