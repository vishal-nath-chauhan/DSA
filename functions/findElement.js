function main(arr, d) {
  let n = arr.length;
  //   for (let i = 0; i < n; i++) {
  //     if (arr[i] == d) {
  //       return i;
  //     }
  //   }
  //   return -1
  let idx = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] == d) {
      idx = i;
      break;
    }
  }
  return idx;
}

let arr = [1, 24, 1, 5, 61, 62, 65, 262, 62464];
console.log(main(arr, 61));
console.log(main(arr, 99961));
