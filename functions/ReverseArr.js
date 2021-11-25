function main(arr){
    let i=0;
    let j=arr.length-1;
    console.log({arr})
    while(i<=j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
    console.log({arr})
}
main([1,2,3,4,5])