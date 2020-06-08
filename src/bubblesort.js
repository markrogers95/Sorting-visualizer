import { setArray } from "./reducers/array";
import { setCompareElements } from "./reducers/bubblesort";
import { setCurrentSorted } from "./reducers/sorted";
import { setSwappingElements } from "./reducers/swap";

function bubbleSort(array, dispatch) {
  
  //time the sort
  var t0 = performance.now();

  //sort is too quick so store all sort actions
  let sortActions = [], sorted = false, round = 0;

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

  //log time - for stats component?
  var t1 = performance.now();
  console.log("Bubblesort took " + (t1 - t0) + " milliseconds on " + 
              "array of length " + (array.length));

  //pass all resultant actions to dispatch to "animate"
  passSortToDispatch(sortActions, dispatch, array);
  
  return array;
}

function passSortToDispatch(sortActions, dispatch, array) {

  //set speed proportional to length - to a point
  const speed = 100 / array.length > 1 ? 100 / array.length : 1;

  //if we have shifted everything off the actions list we can return
  if (!sortActions.length) {

    dispatch(setCompareElements(array.map((num, index) => index)));

    setTimeout(() => { dispatch(setCompareElements([]));
      dispatch(setCurrentSorted(array.map((num, index) => index)));
      }, speed);

    return;
  }
    
  //set the relevent action based on what is stored
  let dispatchFunction = sortActions[0].length > 3 ?
    setArray : sortActions[0].length === 3 || sortActions[0].length === 0 ?
    setSwappingElements : sortActions[0].length === 2 && typeof sortActions[0][0] === "boolean" ?
    setCurrentSorted : setCompareElements;

  //dispatch the relevent actions based on what is stored
  dispatch(dispatchFunction(sortActions.shift()));
  setTimeout(() => {passSortToDispatch(sortActions, dispatch, array, speed);
    }, speed);
}

export default bubbleSort;

//maybe incorporate dispatch into sort and setTimeout() to control
//  otherwise is too quick