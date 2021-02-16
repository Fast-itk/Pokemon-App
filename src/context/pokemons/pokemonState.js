import React, {useReducer} from 'react'

import useHttp from '../../hooks/http.hooks'
import { GET_POKEMONS, SET_LOADING } from '../types'
import { PokemonsContext } from './pokemonsContext'
import { pokemonsReducer } from './pokemonsReducer'

const PokemonsState = ({children}) => {

    const initialState = {
        pokemons: [],
        loading: false
    }

    const [state, dispatch] = useReducer(pokemonsReducer, initialState)

    const API_URL = 'https://pokeapi.co/api/v2/pokemon'

    const {request} = useHttp()

    const setLoading = (isActive) => dispatch({type: SET_LOADING, isActive})

    const getPokemons = async () => {
        try {
            setLoading(true)
            const pokemons = []

            const response = await request(API_URL)

            for (let item of response.results) {
                let imagePok = await request(`${API_URL}/${item.name}`)
                const data = {
                    name: item.name,
                    image: imagePok.sprites.front_default
                }
                pokemons.push(data)
            }
            dispatch({type: GET_POKEMONS, pokemons})
            setLoading(false)

        } catch(e) {
            setLoading(false)
            console.log(e)
        }
    }

    const {pokemons, loading} = state

    return (
        <PokemonsContext.Provider value={{pokemons, loading, getPokemons}}>
            {children}
        </PokemonsContext.Provider>
    )

}

export default PokemonsState