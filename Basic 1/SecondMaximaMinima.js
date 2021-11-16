function main(arr){
  let min,secmin,max,secmax;
  min=arr[0];
  secmin=arr[0];
  max=arr[0];
  secmax=arr[0];
  arr.forEach(item=>{
    if(item<min){
     secmin=min;
     min=item 
    }
    if(item<secmin && item != min){
      secmin=item
    }
    if(item>max){
      secmax=max;
      max=item
    }
    if(item>secmax && item != max){
      secmax=item
    }
  })
  console.log({secmin,secmax})


}
main([3,7,2,-1,4,9])
main([12,13,1,10,34,1])