// útil para listas grandes, O(n log n)

const quicksort = (arr) => {
  if (arr.length <= 1 ) {
    return arr; // o caso base.
  }

  const pivot = arr[0] // primeiro elemento como pivot *procurar alternativas
  const esquerda = []  // arrays a esquerda = menores que
  const direita = [] // arrays a direita = maiores que

  for (let i = 1; i < arr.length; i++) {  

    if (arr[i] < pivot) {
      esquerda.push(arr[i])
    } else {
      direita.push(arr[i])
    }
  }
  return [...quicksort(esquerda), pivot, ...quicksort(direita)]

}


const arr = [5, 3, 1, 6, 14, 7, 2, 12]

console.log(quicksort(arr)) // retorno -> [1, 2, 3, 5, 6, 7, 12, 14]

