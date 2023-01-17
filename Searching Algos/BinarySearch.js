//Binary Search
//big O logn
//list have to be sorted
//example if length of the lisit in 32 it will require 5 steps to get result in worst case sccenario
//log2(32)=5 ----------2**5=32
list=[1,2,3,4,5,6,7,8,9];
function binarySearch(list, searchElement){
  var start=0;
  var end=list.length-1;
  
  while(start<end){
    var mid = (start + end) / 2;
    if (searchElement === list[mid]) {
      return mid;
    }
    if(searchElement<list[mid]){
       end=mid;
    }
    if(searchElement>list[mid]){
        start=mid
    }
  }
  return -1;
}
console.log(binarySearch(list,7));