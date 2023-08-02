const ADD_CATS = 'ADD_CATS'
const SET_IS_LOADING = 'SET_IS_LOADING'
const RESET_CATS = 'RESET_CATS'

const initialState = {
    cats: [],
    isLoading: false
}


const catsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATS:
            return {
                ...state,
                cats: [...state.cats, ...action.payload]
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        
        case RESET_CATS: 
            return {
                ...state,
                cats: action.payload
            }
    
        default:
            return state;
    }
}

export default catsReducer


export const addCatsAC = (payload) => ({type: ADD_CATS, payload})
export const setIsLoadingAC = (payload) => ({type: SET_IS_LOADING, payload})
export const resetCatsAC = (payload) => ({type: RESET_CATS, payload})