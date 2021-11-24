function main(number, b) {
  let temp = number;
  let finalDigit = 0;
  let cnt = 0;

  if (b == 8) {
    while (temp > 0) {
      let qt = parseInt(temp / 10);
      let rm = temp % 10;
      finalDigit += rm * Math.pow(8, cnt);
      temp = qt;
      cnt++;
    }
  }
  if (b == 2) {
    while (temp > 0) {
      let qt = parseInt(temp / 10);
      let rm = temp % 10;
      finalDigit += rm * Math.pow(2, cnt);
      temp = qt;
      cnt++;
    }
  }
  console.log(finalDigit);
}

main(1266,8)