import {passMergeSortToDispatch} from "./sortingDispatch";
import { setArray } from "../reducers/array";

function mergesort(array, dispatch) {

    if (array.length <= 1){

        return array;
    }

    const leftTail = Math.floor(array.length / 2);

    const left = array.slice(0, leftTail);
    const right = array.slice(leftTail);
       
    return(merge(mergesort(left), mergesort(right)));
};

function merge(left, right){

    let merged = [], leftIdx = 0, rightIdx = 0;

    while (leftIdx < left.length && rightIdx < right.length){

        if (left[leftIdx] < right[rightIdx] ){

            merged.push(left[leftIdx]);
            leftIdx++;
        }
        else {

            merged.push(right[rightIdx]);
            rightIdx++;
        }
    }

    return merged.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

export default mergesort;