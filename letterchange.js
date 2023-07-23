function letterChange(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
      if (char === 'z') {
        return 'a';
      } else if (char >= 'a' && char < 'z') {
        return String.fromCharCode(char.charCodeAt() + 1);
      } else {
        return char;
      }
    });
  
    newStr = newStr.replace(/[aeiou]/gi, vowel => vowel.toUpperCase());
  
    return newStr;
  }
  
  const output = letterChange('Hello there');
  console.log(output);
  