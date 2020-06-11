import {passMergeSortToDispatch} from "./sortingDispatch";

function mergePickUp(array, dispatch){

    var t0 = performance.now();

    let sortActions = [],
        sorted = mergesort(array.map((num, idx) => [num, idx]), 
                    sortActions, {array: array.slice(0)});
    
    var t1 = performance.now();
    console.log("Mergesort took " + (t1 - t0) + " milliseconds on " + 
                "array of length " + (array.length));
    
    passMergeSortToDispatch(sortActions, dispatch, sorted);
}

function mergesort(array, sortActions, obj) {

    if (array.length < 2) {return array;}

    let middle = Math.floor(array.length / 2),
        left = array.slice(0, middle),
        right = array.slice(middle);


    let sortLeft = mergesort(left, sortActions, obj),
        sortRight = mergesort(right, sortActions, obj),
        finished = false;

  if (sortLeft.length + sortRight.length === obj.array.length) finished = true;
  return merge(sortLeft, sortRight, sortActions, obj, 0, array.length - 1, finished);
}

function merge(left, right, sortActions, obj, start, end, finished) {

    let sorted = [],
        indexToPush = start;
    
    while (left.length && right.length){

        sortActions.push([left[0][1], right[0][1]]);
        
        if (left[0][0] <= right[0][0]){

            indexToPush++;
            sorted.push(left.shift());
        }
        else{

            sortActions.push([left[0][1], right[0][1], true]);
            right[0][1] = indexToPush++;
            sorted.push(right.shift());
            left.forEach(subArr => subArr[1]++);

            if (start === 0){

                obj.array = sorted.map(subArr => subArr[0]).concat(left.map(subArr => subArr[0])).concat(right.map(subArr => subArr[0])).concat(obj.array.slice(end + 1));
            }
            else{
                obj.array = obj.array.slice(0, start).concat(sorted.map(subArr => subArr[0])).concat(left.map(subArr => subArr[0])).concat(right.map(subArr => subArr[0])).concat(obj.array.slice(end + 1));
            }

            sortActions.push(obj.array.concat([indexToPush - 1, indexToPush]));
            sortActions.push([]);
        }   
    if (finished) sortActions.push([true, indexToPush - 1]);
    }

  return sorted.concat(left).concat(right);
}

export default mergePickUp;