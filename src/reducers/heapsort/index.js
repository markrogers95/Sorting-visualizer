import { createAction, handleActions } from "redux-actions";

const initialState = [];

export const SET_HEAP_INDEXES = "SET_HEAP_INDEXES";
export const setHeapIndexes = createAction(SET_HEAP_INDEXES);

export const heapIndexes = handleActions({
    SET_HEAP_INDEXES: (state, { payload }) => {
    return payload;
  },
}, initialState);