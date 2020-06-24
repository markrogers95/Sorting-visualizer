import { setArray } from "../../reducers/array";
import { setCurrentSorted } from "../../reducers/sorted";
import { setSwappingElements } from "../../reducers/swap";
import { setPivot, setIndices } from "../../reducers/quicksort";

function passRadixSortToDispatch(sortActions, dispatch, array){

    const speed = 600 / array.length > 1 ? 600 / array.length : 1;
  
    if (!sortActions.length) {
        dispatch(setSwappingElements([]));
        dispatch(setPivot(null));
        setTimeout(() => {dispatch(setCurrentSorted(array.map((num, index) => index)));}
        , speed);
      return;
    }

    if (sortActions[0].length != array.length && sortActions[0].length > 3){
      console.log("sort " + sortActions[0]);    
      var hold = sortActions.shift();
      console.log("hold " + hold);
      hold.pop();
      dispatch(setSwappingElements(hold));
    }

    if (!sortActions[0].length){
      dispatch(setSwappingElements([]));
      sortActions.shift();
    }
      
    let dispatchFunction = !(sortActions[0] instanceof Array) ?
        setPivot : sortActions[0].length === array.length ?
        setArray : setCurrentSorted; 

    dispatch(dispatchFunction(sortActions.shift()));

    setTimeout(() => {passRadixSortToDispatch(sortActions, dispatch, array, speed);
      }, speed);    
  };
  
  export {passRadixSortToDispatch};