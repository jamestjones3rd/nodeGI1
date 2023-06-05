function calculateSum(numbers) {
    let totalSum = 0;
    for (let i = 0; i < numbers.length; i++) {
      const number = parseFloat(numbers[i]);
      if (!isNaN(number)) {
        totalSum += number;
      } else {
        console.log(`Invalid number: ${numbers[i]}`);
      }
    }
    return totalSum;
  }
  
  if (process.argv.length <= 2) {
    console.log("No numbers provided.");
  } else {
    const arguments = process.argv.slice(2);
    const sumResult = calculateSum(arguments);
    console.log(`${sumResult}`);
  }