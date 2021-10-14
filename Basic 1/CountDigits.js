function countDigits(number) {
  // let num=String(number)
  // return num.length
  let count = 0;
  while (number >= 1) {
    number = number / 10;
    count++;
  }
  return count;
}

console.log(countDigits(235235));
