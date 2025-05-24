const reverseString = function(str) {
  reversed = ""
  for (char of str) {
    reversed = char + reversed
  }
  return reversed
};

// Do not edit below this line
module.exports = reverseString;
