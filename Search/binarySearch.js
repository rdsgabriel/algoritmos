// útil para listas *ordenadas*, possui complexidade de tempo O(log n)

// arr -> lista, x -> valor a ser encontrado
const binarySearch = (arr, x) => {
  let esquerda = 0;
  let direita = arr.length - 1;

  while ( esquerda <= direita) {

    let mid = Math.floor((esquerda + direita) / 2);

    if (arr[mid] === x) {
      return mid // caso base
    } else if (arr[mid] < x ) {
      esquerda = mid + 1
    } else {
      direita = mid - 1};
  }
  return -1;
}


let arr = [1, 3, 5, 7, 9];
let x = 5;

console.log(binarySearch(arr, x)); // retorno: 2