function main(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let i = 0;
  let j = 0;
  let final = [];
  while (i < n1 || j < n2) {
    let sum = arr1[i] + arr2[j];
    final.push(sum);
    i++;
    j++;
  }
  console.log({ final });
}

let arr1 = [3, 1, 0, 7, 5];
let arr2 = [1, 1, 1, 1, 1, 1];
main(arr1, arr2);
