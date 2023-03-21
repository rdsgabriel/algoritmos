// ineficiente para dados grandes

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i+1; j < arr.length; j++) {
      // encontra o menor número da lista
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    //
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp
  }
return arr;
}

const arr = [4,3,2,1]

console.log(selectionSort(arr)) // retoro -> [1, 2, 3, 4]