import { types } from "../types/types";
const initialState = {
    id:"",
    name: "",
    image:""
}
export const loginReducer = (state=initialState ,action) => {
    switch (action.type) {
        
            case types.login:
                
            return{
                
                id: action.payload.id,
                name: action.payload.displayname,
                image: action.payload.image
            }
            case types.logout:
            return { }

            default:
                return state
    }
}