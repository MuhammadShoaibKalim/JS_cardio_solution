//Challenge 03
 function seekDestory(arr,...rest)
 {
   return arr.filter(val=>
    !rest.includes(val));
 }
console.log(seekDestory([1,3,5,6,7,'Hello',9,8],2,6));
