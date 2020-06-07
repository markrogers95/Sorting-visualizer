import { combineReducers } from "redux";

import { array } from "./array";
import { method } from "./method";
import { currentBubbleTwo } from "./bubblesort";

export default combineReducers({
    array, 
    method, 
    currentBubbleTwo,
});