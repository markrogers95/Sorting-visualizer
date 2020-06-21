import { setArray } from "../../reducers/array";
import { setCurrentSorted } from "../../reducers/sorted";
import { setSwappingElements } from "../../reducers/swap";
import { setMerge } from "../../reducers/mergesort";


function passMergeSortToDispatch(sortActions, dispatch, array) {

    const speed = 300 / array.length > 1 ? 300 / array.length : 1;
    
    if (!sortActions.length){
        setTimeout(() => {dispatch(setCurrentSorted(array.map((num, index) => index)));}
        , speed);
        return;
    }

    let dispatchFunction = sortActions[0].length > 3 ?
        setArray : sortActions[0].length === 3 && typeof sortActions[0][2] === "boolean" || sortActions[0].length === 0 ?
          setSwappingElements : sortActions[0].length === 2 && typeof sortActions[0][0] === "boolean" ?
            setCurrentSorted : setMerge;
    
    if (dispatchFunction === setArray) {
  
      let currentToDispatch = sortActions.shift();
  
      dispatch(dispatchFunction(currentToDispatch.slice(0, currentToDispatch.length - 2)));
      dispatch(setSwappingElements([]));
      dispatch(setMerge([]));
      dispatch(setSwappingElements([currentToDispatch[currentToDispatch.length - 2], currentToDispatch[currentToDispatch.length - 1]]));
      dispatch(setMerge([currentToDispatch[currentToDispatch.length - 2], currentToDispatch[currentToDispatch.length - 1]]));
  
    }
    else{
      dispatch(dispatchFunction(sortActions.shift()));
    }
  
    setTimeout(() => {passMergeSortToDispatch(sortActions, dispatch, array, speed);
      }, speed);
  };

  export {passMergeSortToDispatch};