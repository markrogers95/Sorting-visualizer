import {passQuickSortToDispatch} from "./sortingDispatch";

function quicksortPickup(array, dispatch){

    var t0 = performance.now();

    let sortActions = [],
             result = quicksort(array, 0, array.length - 1);

    passQuickSortToDispatch(sortActions, dispatch, array);
    
    var t1 = performance.now();
    
    console.log("Quicksort took " + (t1 - t0) + " milliseconds on " + 
                "array of length " + (array.length));
    
}

function quicksort(array, left, right, sortActions) {

    var pivot;

    if (array.length > 1) {

        pivot = partition(array, left, right);

        if (left < pivot - 1) {

            quicksort(array, left, pivot - 1);
        }
        if (pivot < right) {
            
            quicksort(array, pivot, right);
        }
    }
    return array;
}



function partition(array, left, right) {
    
    var pivot   = array[Math.floor((right + left) / 2)],
            i   = left,
            j   = right;

    while (i <= j) {

        while (array[i] < pivot) {
            i++;
        }

        while (array[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(array, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}

function swap(array, elOne, elTwo){

    var temp = array[elOne];

    array[elOne] = array[elTwo];
    array[elTwo] = temp;
}

export default quicksortPickup;