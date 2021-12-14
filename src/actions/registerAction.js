import { types } from "../types/types"
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "@firebase/auth"

export const register = (name, img, email, password) => {
    return {
        type: types.register,
        payload: {
            name, 
            img,
            email,
            password,
        }
    }
}

export const registerEmailPassword = (name, file,email, password) =>{
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password, file)
        .then(async({user})=>{
            await updateProfile(auth.currentUser, {displayName: name, photoURL:file})

            dispatch(register(user.displayName, user.photoURL, user.email, user.uid))
        })
    }
}