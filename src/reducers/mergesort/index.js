import { createAction, handleActions } from "redux-actions";

const initialState = [];

export const SET_MERGE = "SET_MERGE";
export const setMerge = createAction(SET_MERGE);

export const merge = handleActions({
    SET_MERGE: (state, { payload }) => {
    return payload;
  },
}, initialState);