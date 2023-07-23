//challenge 02
function isPalindrome(str) 
{
function reverseString(str)
     {
      return str
      .split('')
      .reverse()
      .join('');
    }
    
const reversed = reverseString(str);
    if (reversed === str)
     {
      return true;
    } 
    else
     {
      return false;
    }
  }


  
  const output = isPalindrome('AAA');
  console.log(output);
  
