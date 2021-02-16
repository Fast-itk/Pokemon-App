import React, {useReducer} from 'react'
import { DetailContext } from './detailContext'
import { detailReducer } from './detailReducer'
import useHttp from '../../hooks/http.hooks'
import { GET_DETAIL, SET_LOADING } from '../types'

const DetailState = ({ children }) => {

    const initialState = {
        pokemon: {
            abilities: [],
            baseExpirience: null,
            height: null,
            frontImage: '',
            stats: [],
            types: []
        },
        loading: false
    }

    const [state, dispatch] = useReducer(detailReducer, initialState)

    const {request} = useHttp()

    const API_URL = 'https://pokeapi.co/api/v2/pokemon'

    const setLoading = (isActive) => dispatch({type: SET_LOADING, isActive})

    const getDetail = async (name) => {

        try {
            setLoading(true)

            const response = await request(`${API_URL}/${name}`)

            const {abilities, base_experience, height, sprites, stats, types} = response

            const data = {
                abilities,
                baseExpirience: base_experience,
                height,
                frontImage: sprites.front_default,
                stats,
                types
            }
            
            dispatch({type: GET_DETAIL, data})
            setLoading(false)

        } catch(e) {
            setLoading(false)
            console.log(e)
        }

    }

    const {abilities, baseExpirience, height, frontImage, stats, types} = state.pokemon
    const {loading} = state

    return (
        <DetailContext.Provider 
            value={{abilities, baseExpirience, height, frontImage, stats, types, loading, getDetail}}
        >
            {children}
        </DetailContext.Provider>
    )
}

export default DetailState

