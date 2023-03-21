import quicksort from './quicksort'

const arr = [1,5,2,3,6]
test('tem que ordenar', () => {
  expect(quicksort(arr)).toStrictEqual([1,2,3,5,6])
})