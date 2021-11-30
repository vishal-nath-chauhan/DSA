function main(arr) {
  let k = 0;
  while (k <= arr.length) {
    for (let i = k; i < arr.length; i++) {
      let temp = [];
      for (let j = k; j <= i; j++) {
        temp.push(arr[j]);
      }
      console.log(temp);
    }
    k++;
  }
}
main([1, 2, 3, 4]);
