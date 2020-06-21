import {passBubbleSortToDispatch} from "./dispatch-methods/bubble-dispatch";

function bubbleSort(array, dispatch) {
  
  let t0 = performance.now(),
      sortActions = [], sorted = false, round = 0;

  sortActions.push(array.slice(0));

  while (!sorted) {

  sorted = true;
    
  for (let i = 0; i < array.length - 1 - round; i++) {

    sortActions.push([i, i + 1]);

    if (array[i] > array[i + 1]) {

      sortActions.push([i, i + 1, true]);
            
      let temp = array[i];
        
      array[i] = array[i + 1];
      array[i + 1] = temp;
        
      sorted = false;
        
      sortActions.push(array.slice(0));
      sortActions.push([]);
    }
  }

  sortActions.push([true, array.length - 1 - round]);  
  round++;
  }

  let t1 = performance.now();
  console.log("Bubblesort took " + (t1 - t0) + " milliseconds on " + 
              "array of length " + (array.length));

  passBubbleSortToDispatch(sortActions, dispatch, array);
  
  return array;
}

export default bubbleSort;