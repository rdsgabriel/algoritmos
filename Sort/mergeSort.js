// O(n log n)

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  // divide o array em duas partes iguais
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // ordena cada parte recursivamente
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // combina as duas partes em uma única lista ordenada
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  // percorre as duas listas, comparando seus elementos e adicionando o menor deles na lista resultante
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // adiciona os elementos restantes, se houver algum
  result = result.concat(left.slice(i)).concat(right.slice(j));

  return result;
}


function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  // percorre as duas listas, comparando seus elementos e adicionando o menor deles na lista resultante
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // adiciona os elementos restantes, se houver algum
  result = result.concat(left.slice(i)).concat(right.slice(j));

  return result;
}