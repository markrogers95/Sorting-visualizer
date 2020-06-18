import swap from './quicksort';

function heapify(array, i){

    let largest = i,
        left = i * 2 + 1,
        right = left + 1;
    
    if (array[left] > array[largest]){
        largest = left;
    }

    if (array[right] > array[largest]){
        largest = right;
    }

    if (largest != i){
        swap(array, i, largest);
        heapify(array, largest);
    }

    return array;
}

function heapsort(array, dispatch){

    var lengthCount = array.length;

    for (let i = Math.floor(lengthCount / 2); i >= 0; i -= 1){
        heapify(array, i);
    }

    for (let i = lengthCount - 1; i > 0; i--){
        
        swap(array, 0, i);
        lengthCount--;

        heapify(array, 0);
    }

    console.log(array);
}

export default heapsort;