function swap(arr, i,j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}


function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i+1)
        swapped = true
      }
    }
  } while (swapped)
}
bubbleSort(arr)
console.log(arr);
