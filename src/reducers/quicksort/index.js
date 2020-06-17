import { createAction, handleActions } from "redux-actions";

const initialStateOne = [];
const initialStateTwo = null;

export const SET_INDICES = "SET_INDICES";
export const setIndices = createAction(SET_INDICES);
export const SET_PIVOT = "SET_PIVOT";
export const setPivot = createAction(SET_PIVOT);

export const indices = handleActions({
  SET_INDICES: (state, { payload }) => {
    return payload;
  },
}, initialStateOne);
export const pivot = handleActions({
  SET_PIVOT: (state, { payload }) => {
    return payload;
  },
}, initialStateTwo);