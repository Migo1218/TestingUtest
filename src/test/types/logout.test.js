import '@testing-library/jest-dom'
import { loginReducer } from '../../reducers/loginReducer';
import { types } from '../../types/types';


describe('prueba login', () => {
    test('logout', () => {
        const initialState = {
            id: '1',
            displayname: 'miguel',
            image: 'imagen.png'
        };
        const action = {
            type: types.logout,
           
        };
        const state = loginReducer (initialState, action);
        expect(state).toEqual({})
           
        
    })
})