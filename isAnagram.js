/*function isAnagram(str1,str2)
{
     return formatStr(str1)===formatStr(str2);
}
function formatStr(str)
{
  return str.replace(/[^\w]/g,'')
  .toLowerCase()
  .split('')
  .sort()
  .join(' ');

}
const output=isAnagram('below','elbow');
console.log(output);  
*/

function isAnagram(str1, str2) {
  return sortString(str1) === sortString(str2);
}

function sortString(str) {
  return str.split('').sort().join('');
}

const output = isAnagram('below', 'elbow');
console.log(output);



