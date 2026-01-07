function convertToRoman(num) {
	  if (num === 0) return "";

    let result = "";
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
const keys = Object.keys(obj).map(Number);

  for (let i = 0; i < keys.length; i++) {
    const [symbol, valueыг] = obj[i];
    const value = obj[i][1];
    const sym = obj[i][0];

    // Normal repetition
    while (num >= value) {
      result += sym;
      num -= value;
    }

    // Subtractive case (look 2 steps ahead)
    if (i + 2 < keys.length) {
      const subValue = value - obj[i + 2][1];
      if (num >= subValue) {
        result += obj[i + 2][0] + sym;
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
