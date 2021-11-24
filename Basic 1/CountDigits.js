function countDigits(number) {
  // let num=String(number)
  // return num.length
  let count = 0;
  while (number > 0) {
    number = parseInt(number / 10);
    count++;
    console.log({count,number})
  }
  return count;
}

console.log(countDigits(235235));


// function countDigits(number) {
//     // let num=String(number)
//     // return num.length
//     let count = 0;
//     while (Math.round(number,1) >0) {
//       number = parseFloat(number / 10,2);
//       count++;
//       console.log({number,count})
//     }
//     return count;
//   }
  
//   console.log(countDigits(235124));
  