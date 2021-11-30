function main(arr, key) {
  let n = arr.length;
  let mid = parseInt(n / 2);
  let low = 0;
  let high = n - 1;
  let found = false;

  while (low <= high) {
    if (arr[mid] == key) {
      console.log("Found ", key);
      console.log('Index ',mid)
      found = true;
      break;
    } else if (key < arr[mid]) {
      high = mid - 1;
      mid = parseInt((low + high) / 2);
    } else {
      low = mid + 1;
      mid = parseInt((low + high) / 2);
    }
  }
  if (!found) {
    console.log("Not found");
  }
}
main([1,2,3,4,5,6,7,8,9],30)