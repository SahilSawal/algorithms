//bubble sort
//big On2
var list=[2,5,10,5,3,8,6,9,1];
function bubblesort(list){
for(var i=list.length;i>0;i--){
    for(var j=0;j<i-1;j++){
        if(list[j]>list[j+1]){
        var temp= list[j];
        list[j]=list[j+1];
        list[j+1]=temp;
        }
    }
}
return list
}
console.log(bubblesort(list));