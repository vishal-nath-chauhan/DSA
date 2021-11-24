function main(arr){
    // let min=Number.MAX_SAFE_INTEGER ;
    let min=arr[0]
    let max=arr[0];
    let n=arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]>max){
            max=arr[i]
        }
        if(arr[i]<min){
            min=arr[i]

        }
    }
    console.log(max-min)
}

main([6,15,30,40,4,11,9])