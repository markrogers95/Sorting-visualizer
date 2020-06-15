import {passQuickSortToDispatch} from "./sortingDispatch";

function quicksortPickup(array, dispatch){

    var t0 = performance.now();

    let sortActions = [];

    quicksort(array, 0, array.length - 1, sortActions);

    passQuickSortToDispatch(sortActions, dispatch, array);
    
    var t1 = performance.now();
    
    console.log("Quicksort took " + (t1 - t0) + " milliseconds on " + 
                "array of length " + (array.length));

    return array;
    
}

function quicksort(array, left, right, sortActions) {

    var pivot;

    sortActions.push(array.slice(0));
    sortActions.push([]);

    if (array.length > 1) {

        pivot = partition(array, left, right, sortActions);
        sortActions.push(pivot);

        if (left < pivot - 1) {
            quicksort(array, left, pivot - 1, sortActions);  
        }
        if (pivot < right) {
            quicksort(array, pivot, right, sortActions);
        }

    }
    return array;
}



function partition(array, left, right, sortActions) {
    
    var pivot   = array[Math.floor((right + left) / 2)],
            i   = left,
            j   = right;

    sortActions.push(pivot);

    while (i <= j) {

        while (array[i] < pivot) {
            i++;
            sortActions.push([i,j])
        }

        while (array[j] > pivot) {
            j--;
            sortActions.push([i,j])
        }

        if (i <= j) {

            sortActions.push([i, j, true]);
            swap(array, i, j); //swap two elements
            i++;
            j--;
        }
        sortActions.push([pivot, right]);
    }

    return i;
}

function swap(array, elOne, elTwo){

    var temp = array[elOne];

    array[elOne] = array[elTwo];
    array[elTwo] = temp;
}

export default quicksortPickup;