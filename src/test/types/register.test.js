import "@testing-library/jest-dom";
import { registerReducer } from "../../reducers/registerReducer";
import { types } from "../../types/types";

describe("prueba registro", () => {
  test("se debe registrar", () => {
    const initialState = {};
    const action = {
      type: types.register,
      payload: {
        name: 'miguel',
        file: "imgen.png",
        email: 'hola@gmail.com',
        password: '123456',
      },
    };
    const state = registerReducer(initialState, action);
    expect(state).toEqual({
        name: 'miguel',
        img: 'imgen.png',
        email: 'hola@gmail.com',
        password: '123456',
    });
  });
});
