/**
 * We loop through the array, pushing all non-zero values to a new array, and keeping track of the
 * number of zeros we encounter. Then, we loop through the array again, pushing the number of zeros we
 * encountered to the end of the new array.
 * @param arr - an array of integers
 * @returns An array of non-zero numbers followed by an equal number of zeros.
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
