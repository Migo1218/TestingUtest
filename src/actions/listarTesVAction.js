
import { collection,getDocs} from "@firebase/firestore";
import { db } from "../firebase/firebase";
import { types } from "../types/types";


export const listarPreguntasTestVocacional = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "testvocacional"));
        const questions = [];
        querySnapshot.forEach((doc) => {
            questions.push({
                ...doc.data()
            })
        });
        dispatch(listSync(questions));
    }
}

export const listSync = (preguntas) => {
    return {
        type: types.listar,
        payload: preguntas
    }
}