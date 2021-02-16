import { GET_DETAIL, SET_LOADING } from "../types"


export const detailReducer = (state, action) => {
    switch(action.type) { 
        case SET_LOADING: return {
            ...state,
            loading: action.isActive
        } 
        case GET_DETAIL: return {
            ...state,
            pokemon: action.data
        }
        default: return state
    }
}