import { setArray } from "../../reducers/array";
import { setCompareElements } from "../../reducers/bubblesort";
import { setCurrentSorted } from "../../reducers/sorted";
import { setSwappingElements } from "../../reducers/swap";

function passBubbleSortToDispatch(sortActions, dispatch, array) {

    const speed = 300 / array.length > 1 ? 300 / array.length : 1;
  
    if (!sortActions.length) {

        dispatch(setCompareElements(array.map((num, index) => index)));
        setTimeout(() => { dispatch(setCompareElements([]));
            dispatch(setCurrentSorted(array.map((num, index) => index)));
            }, speed);
            
        return;
    }
      
    let dispatchFunction = sortActions[0].length > 3 ?
          setArray : sortActions[0].length === 3 || sortActions[0].length === 0 ?
            setSwappingElements : sortActions[0].length === 2 && typeof sortActions[0][0] === "boolean" ?
            setCurrentSorted : setCompareElements;
  
    dispatch(dispatchFunction(sortActions.shift()));
    
    setTimeout(() => {passBubbleSortToDispatch(sortActions, dispatch, array, speed);
    }, speed);
};

export {passBubbleSortToDispatch};