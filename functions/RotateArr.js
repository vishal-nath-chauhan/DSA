// function main(arr,k){
//     let tempK=k;
//     let temp=[];
//     let n=arr.length-1

//     let cnt=0
//     for(let i=n;i>n-k;i--){
//         temp[cnt]=arr[i];
//         cnt++;
//     }
//     for(let i=0;i<=n-k;i++){
//         temp[cnt]=arr[i];
//         cnt++
//     }
//     console.log({temp})
// }
// main([3,4,7,2,5,1],4)
function reverse(arr, l, r) {
  let i = l;
  let j = r;
  while (i <= j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
//   console.log({ arr });
}

function main2(arr, k) {
    console.log('came')
if(k>arr.length){
    k=k%arr.length
}
if(k<0){
    k=arr.length+k
}

  reverse(arr, 0, arr.length - k - 1);
  reverse(arr, arr.length - k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  console.log({arr})
}
// main([3, 4, 7, 2, 5, 1], 2)
main2([3,4,7,2,5,1],-1)

// console.log('naem is vishak')