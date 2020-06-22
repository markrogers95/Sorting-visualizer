import {passRadixSortToDispatch} from "./dispatch-methods/radix-sort-dispatch";

function getDigit(num, nth){

    var digit = 0;

    while(nth--){
        digit = num % 10
        num = Math.floor((num - digit) / 10)
    }

    return digit;
}
  
function radixsort(array, dispatch){

    var max = Math.floor(Math.log10(Math.max.apply(Math,array))),
        digitBuckets = [],
        idx = 0,
        animationArray = [],
        sortActions = [];
    
    sortActions.push(array.slice(0));
  
    for(var i = 0; i < max + 1; i++){
        
        animationArray = [];
        
        digitBuckets = [];
        
        for(var j = 0; j < array.length ;j++){

            sortActions.push(j);            
            var digit = getDigit(array[j], i+1);

            digitBuckets[digit] = digitBuckets[digit] || [];
            digitBuckets[digit].push(array[j]);
            
            if (i === max){
                sortActions.push([true, j]);
            }
        }

        for (let i = 0; i < digitBuckets.length; i++){

            if (digitBuckets[i]){

                for ( let j = 0; j < digitBuckets[i].length; j++){

                    animationArray.push(digitBuckets[i][j]);
                }
            }
        }
        sortActions.push(animationArray.slice(0));

        animationArray=[]

        
        idx = 0;
        
        for(var t = 0; t < digitBuckets.length; t++){

            if(digitBuckets[t] && digitBuckets[t].length > 0){

                for(j = 0;j<digitBuckets[t].length;j++){
                    
                    array[idx++] = digitBuckets[t][j];
                    sortActions.push(array.slice(0));
                }
            }
        }
        
    }
    console.log(array);
    passRadixSortToDispatch(sortActions, dispatch, array);
    return array
}

export default radixsort;