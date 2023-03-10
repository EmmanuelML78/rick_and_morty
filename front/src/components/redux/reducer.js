export const ADD_FAVORITES = 'ADD_FAVORITES';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';



const initialState = {
    myFavorites: [],
    allCharacters: [],
    errors: {}
}


const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAVORITES:
            return {...state,
                myFavorites: payload,
                allCharacters: payload,
                errors: {}
            }
        case DELETE_FAVORITE:
            return {...state,
                myFavorites: payload,
                errors: {}
            }
        case FILTER:
            const allCharsFiltered = state.allCharacters.filter((char) => char.gender === payload);
            return {...state,
                myFavorites: allCharsFiltered
            } 
        case ORDER:
            return{
                ...state,
                myFavorites: 
                    action.payload === "Ascendente"
                    ? state.allCharacters.sort((a, b) => a.id - b.id)
                    : state.allCharacters.sort((a, b) => b.id - a.id)
            }    
        case "GET_FAVS":
            return{
                ...state,
                myFavorites: payload,
                errors: {},
            }
        case "ERROR":
            return{
            ...state,
            error: payload,
        };
        default:
            return {...state};
    }
}

export default reducer;