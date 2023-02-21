/**
 * If n is greater than 0 and n AND (n - 1) is equal to 0, then return true, otherwise return false
 * @param n - the number to check
 * Big O: O(1)
 * @returns {boolean}
 * @example
 * isPowerOfTwo(1) // true
 * isPowerOfTwo(16) // true
 * isPowerOfTwo(218) // false
 * isPowerOfTwo(0) // false
 *
 */

function isPowerOfTwo(n) {
  //.. should return true or false ..
  if (n > 0 && (n & (n - 1)) === 0) {
    return true
  }
  return false
}
