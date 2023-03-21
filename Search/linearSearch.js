//util para listas pequenas, possui complexidade de tempo O(n)

const linearSearch = (arr, x) => {  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
 return -1; // caso nao ache
}


let x = 3
let arr = [1,5,4,2,3,3]

console.log(linearSearch(arr, x)) // retorno -> 4 (index)