//selection sort
//big On2
var list = [2, 5, 10, 3, 8, 6, 9, 1];
function selectionSort(list) {
  for (var i = 0; i < list.length; i++) {
    let lowest = i;
    for (var j = i + 1; j < list.length; j++) {
      if (list[j] < list[lowest]) {
        lowest = j;
      }
    }
    var temp = list[i];
    list[i] = list[lowest];
    list[lowest] = temp;
  }
  return list;
}

console.log(selectionSort(list));
