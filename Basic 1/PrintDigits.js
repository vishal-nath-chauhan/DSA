function printDigits(number) {
  // number=String(number)
  // for(let item of number){
  //     console.log(item);
  // }
  let numcopy = number;
  let numberlen = 0;
  while (numcopy >= 1) {
    numcopy = numcopy / 10;
    numberlen += 1;
  }
  let div = Math.pow(10, numberlen - 1);
  let num = number;
 
  while (div >= 1) {
    let remainder = num % div;
    let quotient = (num - remainder) / div;
    console.log(quotient);
    div = div / 10;
    num = remainder;
    remainder = num % div;
  }
}
printDigits(15432);
console.log("@".repeat(100));
printDigits(100010);
