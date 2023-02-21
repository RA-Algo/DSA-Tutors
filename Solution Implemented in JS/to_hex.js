/**
 * Convert the decimal values of the input parameters to hexadecimal values, and return the
 * concatenated hexadecimal values as a string.
 * @param r - the red value of the color (0 - 255)
 * @param g - green (0 - 255)
 * @param b - blue value
 * @returns a string of 6 hexadecimal digits.
 * 
 * @example
 * rgb(255, 255, 255) // returns FFFFFF
 * rgb(255, 255, 300) // returns FFFFFF
 * rgb(0,0,0) // returns 000000
 * 
 * @see https://www.rapidtables.com/convert/color/rgb-to-hex.html
 * @see https://www.w3schools.com/jsref/jsref_tostring_number.asp
 * @see https://www.w3schools.com/jsref/jsref_tostring.asp
 * @see https://www.w3schools.com/jsref/jsref_parseint.asp
 * @see https://www.w3schools.com/jsref/jsref_obj_math.asp
 * 
 * Code Wars: https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript/
 * 
 * Big O Notation: O(1)
 * 
 * 
 */
function rgb(r, g, b) {
//   ensure input values are within valid range (0 - 255)
  r = Math.max(0, Math.min(255,r));
  g = Math.max(0, Math.min(255,g));
  b = Math.max(0, Math.min(255,b));
  
//   convert decimal values to Hexadecimal
  var hexDigits = "0123456789ABCDEF"
  var hexValue = "";
  
  for (var i = 0; i < 3; i++){
    var currentByte = i == 0 ? r : (i == 1 ? g : b);
    var firstHexDigit = Math.floor(currentByte / 16);
    var secondHexDigit = currentByte % 16;
    hexValue += hexDigits[firstHexDigit] + hexDigits[secondHexDigit]
  }
  
  return hexValue;
}