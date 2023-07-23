//SortByHeight:Non-deascending order the given array.
function sortByHeight(a) {
    const arr1 = [];
    const arr2 = [];
  
    a.forEach((val, i) => {
      if (val === -1) {
        arr1.push(i);
      } else {
        arr2.push(val);
      }
    });
  
    const sortArr = arr2.sort((a, b) => a-b);
    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));
  
    return sortArr;
  }
  
  const a = [-1, 180, 130, 190, -1, 110, -1, -1, 150];
  console.log(sortByHeight(a));
  