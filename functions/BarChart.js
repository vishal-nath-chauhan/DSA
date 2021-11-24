function main(arr) {
  let n = arr.length;
  let max = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log({ max });
  for (let floor = max; floor >= 1; floor--) {
    let temp = "";
    for (let j = 0; j < n; j++) {
      if (arr[j] >= floor) {
        temp += "*";
      } else {
        temp += " ";
      }
    }
    console.log(temp);
  }
}

main([3, 1, 0, 7, 5]);
