function charMax(str) 
{
    const charMap = {};
    let maxChar=' ';
    let maxNum=0;
    str.split('').forEach
    (function(char)
     {
      if (charMap[char])
      {
        charMap[char]++;
      } 
      else 
      {
        charMap[char] = 1;
      }
     }
    ); 
      for(let char in charMap)
      {
        if(charMap[char]>maxNum)
        maxNum=charMap;
        maxChar=char;
    }
    return maxChar;
}
  
  const result = charMax("Shoaibbb");
  console.log("Max char is :",result);
  