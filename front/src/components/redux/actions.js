import { ADD_FAVORITES, DELETE_FAVORITE, FILTER, ORDER } from "./reducer";
import axios from "axios";

// export const addFavorite = (character) => {
//     return async function(dispatch){

//         try {
//             const respuestaDelBack = await axios.post("http://localhost:3001/favs/create", character);
//         return dispatch({
//             type: ADD_FAVORITES, payload: respuestaDelBack.data,
//         });
//         } catch (error) {
//             return dispatch({type: "ERROR", payload: error});
//         }
       

//         // axios.post("http://localhost:3001/favs/create", character).then(response => {
//         //     return dispatch({ type: ADD_FAVORITES, payload: response.data });
//         // })
//     };
// };

// export const deleteFavorite = (id) => {
//     return async function(dispatch){

//         try {
//             const response = await axios.delete("http://localhost:3001/favs/delete/"+id)
//             return dispatch({ type: DELETE_FAVORITE, payload: response.data });
//         } catch (error) {
//             return dispatch({ type: "ERROR", payload: error })
//         }

//         // axios.delete("http://localhost:3001/favs/delete"+id).then(response => {
//         //     return dispatch({ type: DELETE_FAVORITE, payload: response.data });
//         // })
//     }
	
// };

// export const getFavorites = () => {
//     return async function(dispatch){
//         try {
//             const response = await axios("http://localhost:3001/favs/get")
//             return dispatch({type: "GET_FAVS", payload: response.data, });
//         } catch (error) {
//             return dispatch({ type: "ERROR", payload: error });
//         }
//     }
// } 

// export const filterCards = (gender) => {
//     return { type: FILTER, payload: gender };
// }

// export const orderCards = (id) => {
//     return { type: ORDER, payload: id };
// }

export const addFavorite = (character) => {
    return { type: ADD_FAVORITES, payload: character }
  }
  
  export const deleteFavorite = (id) => {
    return { type: DELETE_FAVORITE, payload: id }
  }
  