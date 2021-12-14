import { types } from "../types/types";
const initialState ={
   categoria:[]
}
export const categoriaReducer = (state=initialState,action) => {
    switch (action.type) {
        
            case types.categoria:
            return{
                categoria:[...state.categoria, action.payload]
            }
            default:
                return state
    }
}