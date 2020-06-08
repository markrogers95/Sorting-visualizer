import { createAction, handleActions } from "redux-actions";

const initialState = [];

export const SET_COMPARE_ELEMENTS = "SET_COMPARE_ELEMENTS";
export const setCompareElements = createAction(SET_COMPARE_ELEMENTS);

export const compareElements = handleActions({
  SET_COMPARE_ELEMENTS: (state, { payload }) => {
    return payload;
  },
}, initialState);