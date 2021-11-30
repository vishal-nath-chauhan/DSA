function main(arr, key) {
  let ceil = 0;
  let floor = 0;
  let low = 0;
  let high = arr.length - 1;
  let mid = parseInt((low + high) / 2);

  while (low <= high) {
    if (key == arr[mid]) {
      ceil = arr[mid + 1];
      floor = arr[mid - 1];
      break;
    }else if(key>arr[mid]){
        low=mid+1;
        mid=parseInt((high+low)/2);
        floor=arr[low-1]

    }else{
        high=mid-1;
        mid=parseInt((low+high)/2);
        ceil=arr[high+1]
    }
  }
  console.log("floor ", floor);
  console.log("ceil ", ceil);
}

main([5, 10, 15, 22, 33, 40, 42, 55],25)
