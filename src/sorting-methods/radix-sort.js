import {passRadixSortToDispatch} from "./dispatch-methods/radix-sort-dispatch";

function radixsort(array, dispatch){

    let sortActions = [];

    sortActions.push(array.slice(0));

    if (array.length === 0) {
      return array;
    }
  
    let radix = 10;
  
    let minValue = array[0],
        maxValue = array[0];

    for (var i = 1; i < array.length; i++) {

        if (array[i] < minValue){

            minValue = array[i];
        }
        else if (array[i] > maxValue){
            maxValue = array[i];
        }
    }

    var exponent = 1;
    while ((maxValue - minValue) / exponent >= 1) {
        
        array = countingSortByDigit(array, radix, exponent, minValue, sortActions);
        exponent *= radix;
    }

    for (let i = 0; i < array.length; i++){
        sortActions.push([true, i]);
    }

    passRadixSortToDispatch(sortActions, dispatch, array);

    return array;
}

function countingSortByDigit(array, radix, exponent, minValue, sortActions) {
    var i;
    var bucketIndex;
    var buckets = new Array(radix);
    var output = new Array(array.length);
  
    for (i = 0; i < radix; i++) {
      buckets[i] = 0;
      output[i] = 0;
    }
  
    for (i = 0; i < array.length; i++) {
      sortActions.push(i);
      bucketIndex = Math.floor(((array[i] - minValue) / exponent) % radix);
      buckets[bucketIndex]++;
    }

    let idx = 0,
    bucketArray = [];
    
    for (let k = 0; k < buckets.length; k++){
      bucketArray.push(idx);
      idx += buckets[k];
    }
    console.log("BUCKET Re " + buckets);
    console.log("BUCKET " + bucketArray);

    bucketArray.push(true);
    sortActions.push(bucketArray);
  
    for (i = 1; i < radix; i++) {
      buckets[i] += buckets[i - 1];
    }
  
    for (i = array.length - 1; i >= 0; i--) {
      bucketIndex = Math.floor(((array[i] - minValue) / exponent) % radix);
      output[--buckets[bucketIndex]] = array[i];
      
      let animationArray = [];
      
      for (let j = 0; j < array.length; j++){
        
        if (output[j] === 0){
          animationArray[j] = array[j];
        }
        else{
          animationArray[j] = output[j];
        }
      }
      
      sortActions.push(animationArray.slice(0));
    }
    sortActions.push([]);

    for (i = 0; i < array.length; i++) {        
        array[i] = output[i];
    }
    sortActions.push(array.slice(0));
  
    return array;
  }

export default radixsort;