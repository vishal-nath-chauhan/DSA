// function main(arr1, arr2) {
//   let n1 = arr1.length;
//   let n2 = arr2.length;
//   let i = 0;
//   let j = 0;
//   let final = [];
//   while (i < n1 || j < n2) {
//     let sum = arr1[i] + arr2[j];
//     final.push(sum);
//     i++;
//     j++;
//   }
//   console.log({ final });
// }

// let arr1 = [3, 1, 0, 7, 5];
// let arr2 = [1, 1, 1, 1, 1, 1];
// main(arr1, arr2);

// function main(arr1, arr2) {
//   let arr3 = [];
//   let i = 0;
//   let j = 0;
//   let k = 0;
//   let n1 = arr1.length;
//   let n2 = arr2.length;
//   while (i < n1 && j < n2) {
//     let d = arr1[i] + arr2[j];
//     arr3[k] = d;
//     i++;
//     j++;
//     k++;
//   }
//   while (i < n1) {
//     arr3[k] = arr1[i];
//     i++;
//     k++;
//   }
//   while (j < n2) {
//     arr3[k] = arr2[j];
//     j++;
//     k++;
//   }
//   console.log({arr1,arr2,arr3})
// }

// PEPCODING WAY -> SOLVING WITH TAKING CARRY AND ADDING DIGIT BY DIGIT

function main(arr1, arr2) {
  let c = 0;
  let n1 = arr1.length - 1;
  let n2 = arr2.length - 1;

  let k = n2 > n1 ? n2 : n1;
  let sum = [];
  console.log({n1,n2,k})
  while (k >= 0) {
    let d = c;
    if (n1 >= 0) {
      d += arr1[n1];
    }
    if (n2 >= 0) {
      d += arr2[n2];
    }
    c = parseInt(d / 10);
    d = d % 10;
    sum[k] = d;
    console.log({d,sum})
    n1--;
    n2--;
    k--;
  }

  if (c != 0) {
    // sum[k+1]
    console.log({ c });
  }
  console.log({ sum });
}

let arr1 = [3, 1, 0, 7, 5];
let arr2 = [1, 1, 1, 1, 1, 1];
console.log(arr1)
console.log(arr2)

main(arr1, arr2);
