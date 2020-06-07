import { createAction, handleActions } from "redux-actions";

const initialState = "";

export const SET_METHOD = "SET_METHOD";
export const setMethod = createAction(SET_METHOD);

export const method = handleActions({
  SET_METHOD: (state, { payload }) => {
    return payload;
  },
}, initialState);