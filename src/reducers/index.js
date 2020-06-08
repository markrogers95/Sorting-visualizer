import { combineReducers } from "redux";

import { array } from "./array";
import { method } from "./method";
import { compareElements } from "./bubblesort";
import { swappingElements } from "./swap";
import { currentSorted } from "./sorted";

export default combineReducers({
    array, 
    method, 
    compareElements,
    swappingElements,
    currentSorted,
});