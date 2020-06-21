import {passQuickSortToDispatch} from "./dispatch-methods/quicksort-dispatch";

function quicksortPickup(array, dispatch){

    var t0 = performance.now();

    let sortActions = [];

    quicksort(array, 0, array.length - 1, sortActions);
    sortActions.push(array.slice(0));
    sortActions.push([true, array]);

    passQuickSortToDispatch(sortActions, dispatch, array);
    
    var t1 = performance.now();
    
    console.log("Quicksort took " + (t1 - t0) + " milliseconds on " + 
                "array of length " + (array.length));

    return array;
    
}

function quicksort(array, left, right, sortActions) {

    var pivot;

    if (left >= right){

        sortActions.push([true, left]);
        return;
    }

    sortActions.push(array.slice(0));
    sortActions.push([]);

    if (array.length > 1) {

        pivot = partition(array, left, right, sortActions);
        sortActions.push(pivot);       

        if (left < pivot - 1) {
            quicksort(array, left, pivot - 1, sortActions);  
            sortActions.push(array.slice(0));
            sortActions.push([true, left]);
        }
        if (pivot < right) {
            quicksort(array, pivot, right, sortActions);
            sortActions.push(array.slice(0));
            sortActions.push([true, right]);
        }
        sortActions.push([true, pivot]);
        
    }
    return array;
}

function partition(array, left, right, sortActions) {
    
    var pivot   = array[Math.floor((right + left) / 2)],
            i   = left,
            j   = right;

    sortActions.push([left, right]);
    sortActions.push(array.slice(0));

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
            sortActions.push(array.slice(0));
            swap(array, i, j, sortActions);
            i++;
            j--;
            sortActions.push([]);
        }
    }
    sortActions.push([true, pivot]);
    return i;
}

function swap(array, elOne, elTwo, sortActions){

    sortActions.push([elOne, elTwo, true]);
    var temp = array[elOne];

    array[elOne] = array[elTwo];
    array[elTwo] = temp;
    sortActions.push(array.slice(0));
}

export default quicksortPickup;