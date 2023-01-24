var list = [5,3,4,1,2];
function insertionSort(arr)
{  
    for(let i=0; i<arr.length; i++){
        let lowest=i;
 
        for(let j=i+1;j<arr.length; j++){
        
            if(arr[lowest]>arr[j]){
           lowest=j;
            }  
        }
        if(i!==lowest){
        // swap(arr,i, lowest);
            var temp =arr[i];
            arr[i]=arr[lowest];
            arr[lowest]=temp;
        }
    }
    
    return arr;
}
let val=insertionSort(list);
console.log(val);