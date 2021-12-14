import { types } from "../types/types";


const initialState = {
    preguntas: [],
    
}


export const listarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.listar:
            return {
                preguntas: [...state.preguntas, action.payload]
            }
       
        default:
            return state;
    }
}