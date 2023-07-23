function missingLetters(str) {
    str = str.toLowerCase(); 
    let compare = str.charCodeAt(0);
    let missing = '';
  
    str.split('').forEach((char, i) => {
      if (str.charCodeAt(i) === compare) {
        ++compare;
      } else {
        missing += String.fromCharCode(compare);
        ++compare; 
      }
    });
  
    return missing;
  }
  
  console.log(missingLetters('abcfh'));
  