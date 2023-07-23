function evenAndOddSum(numbers) {
    let evenSum = 0;
    let oddSum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenSum += numbers[i];
      } else {
        oddSum += numbers[i];
      }
    }
  
    return { evenSum, oddSum };
  }
  
  const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { evenSum, oddSum } = evenAndOddSum(output);
  console.log("The even sum is:", evenSum);
  console.log("The odd sum is:", oddSum);
  