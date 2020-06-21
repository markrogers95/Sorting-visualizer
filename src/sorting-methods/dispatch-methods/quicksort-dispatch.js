import { setArray } from "../../reducers/array";
import { setCurrentSorted } from "../../reducers/sorted";
import { setSwappingElements } from "../../reducers/swap";
import { setPivot, setIndices } from "../../reducers/quicksort";

function passQuickSortToDispatch(sortActions, dispatch, array){

    const speed = 600 / array.length > 1 ? 600 / array.length : 1;
  
    if (!sortActions.length) {
  
      dispatch(setPivot(null));
      dispatch(setIndices([]));
      return;
    }
  
    let dispatchFunction = !(sortActions[0] instanceof Array) ?
          setPivot : sortActions[0].length > 3 ?
            setArray : sortActions[0].length !== 2 ?
              setSwappingElements : sortActions[0].length === 2 && typeof sortActions[0][0] === "boolean" ?
                setCurrentSorted : setIndices;
  
      dispatch(dispatchFunction(sortActions.shift()));
  
      setTimeout(() => {passQuickSortToDispatch(sortActions, dispatch, array, speed);
      }, speed);    
  };
  
  export {passQuickSortToDispatch};