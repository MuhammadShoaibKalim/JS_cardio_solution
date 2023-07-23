/*function chunkArray(arr, len)
{
    //initialze a chunked Array
   const chunkedArr=[];
   let i=0;
   //Loop  while index is less than the array length
   while(i<arr.length)
   {
    //slice out from the index  + 
    chunkedArr.push(arr.slice(i,i+len));
    i+=len;

   }
   return chunkedArr;
}
const output=chunkArray([1,2,3,4,5,6,7,8],2);
console.log(output);           
*/
function chunkArray(arr,len)
{
    const chunkedArr=[];
    let i=0;
    while(i<arr.length)
    {
        chunkedArr.push(arr.slice(i,i+len));
        i+=len;

    }
    return chunkedArr;

}
const output=chunkArray([1,2,3,4,5,6,7,8],2);
console.log(output);