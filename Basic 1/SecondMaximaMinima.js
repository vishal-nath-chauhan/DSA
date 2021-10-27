function findNumber(arr) {
  let min = arr[0];
  let max = arr[1];
  arr.map((element) => {
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
  });
  console.log({ min, max });

  let secMax = max;
  let secMin = max;
  arr.map((element) => {
    if (max - element < secMax && element !== max) {
      secMax = max - element;
    }
    if (element + min < secMin && element != min) {
      secMin = element + min;
    }
  });
  console.log({ secMax, secMin });
}
findNumber([1, 2, 3, 4, 5, 5, 6, 6, 7]);
