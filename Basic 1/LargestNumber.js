function main(n) {
  let num = n.find((element) => {
    if (element < 9) {
      return element;
    }
  });
  let numIndex = n.indexOf(num);
  let tempIndex;
  for (let i = numIndex + 1; i < n.length; i++) {
    if (n[i] > num) {
      tempIndex = i;
      num = n[i];
    }
  }
  let temp = n[numIndex];
  n[numIndex] = n[tempIndex];
  n[tempIndex] = temp;
  console.log({ n });
}
main([9, 9, 4, 2, 9, 2, 6]);
