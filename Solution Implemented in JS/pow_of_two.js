/**
 * If n is greater than 0 and n AND (n - 1) is equal to 0, then return true, otherwise return false
 * @param n - the number to check
 * @returns {boolean}
 * @example
 * isPowerOfTwo(1) // true
 * isPowerOfTwo(16) // true
 * isPowerOfTwo(218) // false
 * isPowerOfTwo(0) // false
 *
 * Big O: O(1)
 *
 * @see https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript
 *
 * Resources:
 * https://www.w3schools.com/jsref/jsref_length_array.asp
 * https://www.w3schools.com/jsref/jsref_for.asp
 * https://www.w3schools.com/jsref/jsref_forin.asp
 * https://www.w3schools.com/jsref/jsref_push.asp
 *
 * author: @highb33kay
 *
 */

function isPowerOfTwo(n) {
  //.. should return true or false ..
  if (n > 0 && (n & (n - 1)) === 0) {
    return true
  }
  return false
}
