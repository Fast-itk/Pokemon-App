import { GET_POKEMONS, SET_LOADING } from "../types"


export const pokemonsReducer = (state, action) => {
    switch(action.type) { 
        case GET_POKEMONS: return {
            ...state,
            pokemons: action.pokemons
        }
        case SET_LOADING: return {
            ...state,
            loading: action.isActive
        }
        default: return state
    }
}
