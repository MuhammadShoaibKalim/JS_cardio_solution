
function flattenArray(array) {
  return array.reduce((a, b) => a.concat(b));
}

const output = flattenArray([[1, 3], [1, 4], [3, 4]]);
console.log(output);


/*
function flattenArray(array) {
  return array.reduce(function(a, b) {
    return a.concat(b);
  });
}

const output = flattenArray([[1, 3], [1, 4], [3, 4]]);
console.log(output);

*/
/*
function flattenArray(array)
{
return [].concat(...array);
}

const output = flattenArray([[1, 3], [1, 4], [3, 4]]);
console.log(output);
*/