
/*
    
       function reverseString(str)
{
    let revString=' ';
  for ( let i=str.length-1; i>=0; i--){
          console.log(i);
  }
    return revString;
}

const input = 'Hello, world!';
const reversed = reverseString(input);
console.log(reversed);
 */
/*
function reverseString(str)
{  
    let revString=' ';
    str.split('').forEach(char =>revString=char+revString);
    return revString;
}
*/
/*
function reverseString(str) {
    return str.split('').reduce((revString, char) => char + revString, '');
  }
  
  const input = 'Hello';
  const reversed = reverseString(input);
  console.log(reversed);
*/


function reverseString(str){
    return str
    .split('')
    .reverse()
    .join('');
}

const input = 'Hello';
const reversed = reverseString(input);
console.log(reversed);
/*

function reverseString(str){
    let revString='';
  for (let char of str)
  {
     revString =char+revString;
  }
}

const input = 'Hello';
const reversed = reverseString(input);
console.log(reversed);
*/
/*
function reverseString(str) {
  let revString = "";
  str.split("").forEach((char) => {
    revString = char + revString;
  });
  return revString;
}

const input = "Hello";
const reversed = reverseString(input);
console.log(reversed);
*/
