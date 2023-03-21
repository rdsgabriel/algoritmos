// útil para listas pequenas

const insertionSort = (arr) => { 
  for ( let i = 1; i < arr.length; i++) { 
    let j = i - 1;
    let temp = arr[i];

    while ( j >= 0 && arr[j] > temp) {
      arr[j+1] = arr[j];
      j--;
    }
      arr [j+1] = temp;
  }
    return arr;
}

const arr = [5,4,2,1,3]


console.log(insertionSort(arr)) // retorno: [ 1, 2, 3, 4, 5 ]