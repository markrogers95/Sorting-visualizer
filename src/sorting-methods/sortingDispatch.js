import { setArray } from "../reducers/array";
import { setCompareElements } from "../reducers/bubblesort";
import { setCurrentSorted } from "../reducers/sorted";
import { setSwappingElements } from "../reducers/swap";

function passBubbleSortToDispatch(sortActions, dispatch, array) {

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

    setTimeout(() => {passBubbleSortToDispatch(sortActions, dispatch, array, speed);
        }, speed);
}

export default passBubbleSortToDispatch;