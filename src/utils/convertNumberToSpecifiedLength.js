/**
 * Converts a number to a string with a specified length, padding with leading zeros if necessary.
 *
 * @param {number} num The number to convert.
 * @param {number} length The desired length of the string.
 * @returns {string} The number as a string, padded with leading zeros.
 * @note : str.padStart(targetLength [, padString])
 */
export function convertNumberToStringWithLength(num, length) {
  return num.toString().padStart(length, '0');
}


//#region

// Có thế dùng cách dùng vòng lặp để làm điều này

// function convertNumberToStrWithLen2(n, len) {
//   let nStr = n.toString();
//   if (nStr.length > len) {
//     return nStr;
//   }
//   const numberMissing = len - nStr.length;
//   for (let i = 0; i < numberMissing; i++) {
//     nStr = "0" + nStr;
//   }
//   return nStr;
// }
//#endregion