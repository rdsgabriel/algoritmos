const bubbleSort = (arr) => {  
  let len = arr.length;
//encadeamento de for's
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
    return arr
} 

let arr = [5,2,4,1,3]

console.log(bubbleSort(arr))