//Challenge 01: Add all numbers.

//Solution 01
/*
function addNumber(num)
{
   const sum=num.reduce((a,b)=>a+b);
   return sum;
}
const output=addNumber([16,2,3,4,5]);
console.log(output);
*/
/*
function addNumber(num)
{
   const sum=num.reduce((a,b)=>a+b); 
   return addNumber;
}
const output=addNumber([1,2,5,8,7,4,3]);
console.log(output);
*/


//Solution 02
function addNumber(...numbers) {
   let total = 0;
   numbers.forEach(num => (total += num));
   return total; 
}

const output = addNumber(16, 2, 3, 4, 5); // Pass individual numbers as arguments
console.log(output);
