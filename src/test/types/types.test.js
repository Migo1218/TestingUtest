import '@testing-library/jest-dom'
import { types } from '../../types/types'

describe('verificar types ', () => {
    test('verificartypes', () => {
       expect(types).toEqual({
        login: '[Auth] login',
        logout:'[logout] logout',
        register: '[Auth]register',
        listar: '[listar]listar',
        categoria:'[Caterorias]categoria'
       })
    })
})