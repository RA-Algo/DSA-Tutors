/**
 * We loop through the array, pushing all non-zero values to a new array, and keeping track of the
 * number of zeros we encounter. Then, we loop through the array again, pushing the number of zeros we
 * encountered to the end of the new array.
 * @param arr - an array of integers
 * @returns An array of non-zero numbers followed by an equal number of zeros.
 *
 * Big O: O(n)
 *
 * @example
 * moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]) // returns [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
 * moveZeros([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) // returns [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 * moveZeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *
 * @see https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
 *
 * Resources:
 * https://www.w3schools.com/jsref/jsref_push.asp
 * https://www.w3schools.com/jsref/jsref_length_array.asp
 * https://www.w3schools.com/jsref/jsref_for.asp
 * https://www.w3schools.com/jsref/jsref_forin.asp
 *
 */
function moveZeros(arr) {
  let nonZeros = []
  let numZeros = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      nonZeros.push(arr[i])
    } else {
      numZeros++
    }
  }

  for (let i = 0; i < numZeros; i++) {
    nonZeros.push(0)
  }

  return nonZeros
}
