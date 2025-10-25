function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

   const symbols = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
   const values  = [1000, 500, 100, 50, 10, 5, 1];

  // Loop through all values
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
    if (i < values.length - 2) {
      const subValue = values[i] - values[i + 2];
      if (num >= subValue) {
        result += symbols[i + 2] + symbols[i];
        num -= subValue;
      }
    }
  }

  return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
