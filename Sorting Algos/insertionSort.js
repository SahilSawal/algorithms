//insertion sort
//big On2
var list = [2, 5, 10, 3, 8, 6, 9, 1];
function insertionSort(arr){
    console.log(arr);
    for(let i=1; i<arr.length; i++){
        let cv=arr[i];
        for(let j=i-1;j>=0&&arr[j]>cv;j--){
            arr[j+1]=arr[j];

        }
        arr[j+1]=cv;
    }
    
    return arr;
}
console.log(insertionSort(list));