/*
function capitalizeLetter(str) 
{
     const strArr = 
     str
    .toLowerCase()
    .split(' ');
    for(let i = 0; i<strArr.length; i++) 
    {
      strArr[i] = strArr[i]
      .substring(0, 1)
      .toUpperCase() 
      +strArr[i]
      .substring(1);
     }
     return strArr.join(' ');
}*/

/*
  function capitalizeLetter(str){
    const strArr = 
       str
      .toLowerCase()
      .split(' ')
      .map(function(word)
      {
        return word[0]
        .toUpperCase()
        +
        word.substring(1);

      }
      )
.join(' ');

  }*/
  function capitalizeLetter(str){
    return str.replace(/\b[a-z]/gi,function(char)
    {
      return char.toUpperCase();
    }
    )
  }
  const output = capitalizeLetter('here is kashif in your guidience  section.');
  console.log(output);
  