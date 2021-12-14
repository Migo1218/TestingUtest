import "@testing-library/jest-dom";
import { listarReducer } from "../../reducers/listarReducer";
import { types } from "../../types/types";

describe("prueba listar", () => {
  test("listar preguntas", () => {
    const initialState = [];
    const action = {
      type: types.listar,
      payload: {preguntas},
    };
    const state = listarReducer(initialState, action);
    expect(state).toEqual(
        preguntas
    );
  });
});
