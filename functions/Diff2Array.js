function main(arr1, arr2) {
  let i = arr1.length-1;
  let j = arr2.length-1;
  let k = i > j ? i : j;
  let c = 0;
  let diff = [];
  while (k >= 0) {
    let d = 0;
    let a1v = i >= 0 ? arr1[i] : 0;
    if (arr2[j] + c > a1v) {
      d = arr2[j] + c - a1v;
      c = 0;
    } else {
      d = arr2[j] + c + 10 - a1v;
      c = -1;
    }

    diff[k] = d;

    i--;
    j--;
    k--;
  }
  console.log({ diff });
}

let arr1 = [1, 2, 5];
let arr2 = [9, 9, 9, 9];
main(arr1, arr2);
