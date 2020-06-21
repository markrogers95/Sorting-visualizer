import {passHeapSortToDispatch} from "./dispatch-methods/heapsort-dispatch";

function heapsort(array, dispatch){

    let sortActions = [];
    sortActions.push(array.slice(0));

    buildMaxHeap(array, sortActions);

    let lastItem = array.length - 1;

    while (lastItem > 0){
        
        swap(array, 0, lastItem, sortActions);
        heapify(array, 0, lastItem, sortActions);

        sortActions.push([0, lastItem, true]);
        sortActions.push(array.slice(0));
        sortActions.push([]);
        sortActions.push([true, lastItem]);
        lastItem--;
    }
    passHeapSortToDispatch(sortActions, dispatch, array);
};

function buildMaxHeap(array, sortActions) {

    var i;
    i = array.length / 2 - 1;
    i = Math.floor(i);
  
    while (i >= 0) {
      heapify(array, i, array.length, sortActions);
      i -= 1;
    }
}

function heapify(array, i, max, sortActions){

    while ( i < max){

        let index = i,
        left = i * 2 + 1,
        right = left + 1;

        if ( left < max && array[left] > array[index]){
            index = left;
            sortActions.push([left, right, index]);
        }

        if (right < max && array[right] > array[index]){
            index = right;
            sortActions.push([left, right, index]);
        }

        if (index == i){
            return;
        }

        swap(array, i, index, sortActions);
        i = index;
    }
};

function swap(array, elOne, elTwo, sortActions){

    sortActions.push([elOne, elTwo, true]);
    var temp = array[elOne];
    sortActions.push([]);

    array[elOne] = array[elTwo];
    array[elTwo] = temp;
    sortActions.push(array.slice(0));
}

export default heapsort;