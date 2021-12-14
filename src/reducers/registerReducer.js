import { types } from "../types/types";

const initialState = {
   
    name: "",
    img:"",
    email: "",
    password: ""
}

export const registerReducer = (state=initialState,action) =>{
    switch (action.type) {
        case types.register:
           
            return{
                ...state,
                name:action.payload.name,
                img:action.payload.file,
                email: action.payload.email,
                password: action.payload.password,
            }
    
        default:
            return state
    }
}
