import '@testing-library/jest-dom'
import { loginReducer } from '../../reducers/loginReducer';
import { types } from '../../types/types';


describe('prueba login', () => {
    test('debe realizar el login', () => {
        const initialState = {};
        const action = {
            type: types.login,
            payload:{
                id: '1',
                displayname: 'miguel',
                image: 'imagen.png'
            }
        };
        const state = loginReducer (initialState, action);
        expect(state).toEqual({
            id:'1',
            name: 'miguel',
            image: 'imagen.png'
        })
    })
    
})