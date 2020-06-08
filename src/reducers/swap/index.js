import { createAction, handleActions } from "redux-actions";

const initialState = [];

export const SET_SWAPPING_ELEMENTS = "SET_SWAPPING_ELEMENTS";
export const setSwappingElements = createAction(SET_SWAPPING_ELEMENTS);

export const swappingElements = handleActions({
  SET_SWAPPING_ELEMENTS: (state, { payload }) => {
    if (payload.length) {
      return state.concat(payload);
    } else {
      return [];
    }
  },
}, initialState);