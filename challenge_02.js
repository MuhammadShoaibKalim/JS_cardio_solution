//Challenge :02
// solution 01
/*

*/
function isPrime(number)
{
    if (number <= 1) 
        return false;
for (let i = 2; i <= Math.sqrt(number); i++) 
    {
        if (number % i === 0) 
        return false;
    }
        return true;
}

function sumOfPrime(...nums) 
{
    let sum = 0;
for (let i = 0; i < nums.length; i++) 
    {
        if(isPrime(nums[i]))
         {
            sum += nums[i];
         }
    }
            return sum;
}
const output = sumOfPrime(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(output); 
// Output: 17 (2 + 3 + 5 + 7)
