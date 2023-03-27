function split(wholeArray) {
  let firstHalf = [] ,
    secondHalf = [];
  /* tu código acá para definir el firstHalf y secondHalf array */
  for (let i = 0; i < Math.floor(wholeArray.length / 2); i++) {
    firstHalf[i] = wholeArray[i];
  }

  let j = 0;
  for (let i = Math.floor(wholeArray.length / 2); i < wholeArray.length; i++) {
    secondHalf[j] = wholeArray[i];
    j++;
  }
  return [firstHalf, secondHalf];
}

function merge(array1,array2) {
    let arrOutput = [] ;
    let left = 0 ;
    let right = 0 ;
    
    while (left < array1.length && right < array2.length) {
        if (array1[left] < array2[right]) {
            arrOutput.push(array1[left]);
            left++;
        } else {
            arrOutput.push(array2[right]);
            right++;
        }
    }
    
    return arrOutput.concat(array1.slice(left)).concat(array2.slice(right));
}

function mergeSort(arr) {
    
    if (arr.length == 1) {
        return arr ;
    }

    let [left , right] = split(arr) ;
    console.log(right); 
    console.log(left);

    return merge(mergeSort(left),mergeSort(right)); 
}
