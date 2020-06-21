import { setArray } from "../../reducers/array";
import { setCurrentSorted } from "../../reducers/sorted";
import { setSwappingElements } from "../../reducers/swap";
import { setHeapIndexes } from "../../reducers/heapsort";

function passHeapSortToDispatch(sortActions, dispatch, array){

    const speed = 300 / array.length > 1 ? 300 / array.length : 1;

    if (!sortActions.length) {

        dispatch(setHeapIndexes(array.map((num, index) => index)));
        setTimeout(() => {
          dispatch(setHeapIndexes([]));
        }, speed);

        return;
      }

      let dispatchFunction = sortActions[0].length > 3 ?
          setArray : sortActions[0].length === 3 && typeof sortActions[0][2] === "boolean" || !sortActions[0].length ?
            setSwappingElements : sortActions[0].length === 2 && typeof sortActions[0][0] === "boolean" ?
              setCurrentSorted : setHeapIndexes;

      dispatch(dispatchFunction(sortActions.shift()));
      
      setTimeout(() => {
        passHeapSortToDispatch(sortActions, dispatch, array, speed);
      }, speed);

};



export {passHeapSortToDispatch};