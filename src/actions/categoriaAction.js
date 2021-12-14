import { types } from "../types/types"

export const Categoria =(categ)=>{
    return{
        type:types.categoria,
        payload:categ
    }
}