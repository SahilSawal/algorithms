//linear Search 
//big O(n)
//traverse every element one time 
//return index
var list =[1,2,3,4,5,6,6];
function linearSearch(list,searchElement){
for(var i=0;i<list.length;i++){
    if(list[i]===searchElement){
        return i;
    }
}
return -1;
}
console.log(linearSearch(list,3));