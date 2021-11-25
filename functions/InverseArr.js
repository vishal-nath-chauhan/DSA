function main(arr) {
  let n = arr.length;
  let temp = [];
  for (let i = 0; i < n; i++) {
    // let temp=arr[i];
    temp[arr[i]] = i;
  }
  console.log({temp})
}


main([3,4,1,2,0])