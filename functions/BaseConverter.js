function main(digit, base) {
  let temp = digit;
  let finaldigit = 0;
  let cnt = 0;
  if (base == 2) {
    while (temp > 0) {
      let qt = parseInt(temp / 2);
      let rm = temp % 2;
      finaldigit += rm * Math.pow(10, cnt);
      temp = qt;
      cnt++;
    }
  }
  if (base == 8) {
    while (temp > 0) {
      let qt = parseInt(temp / 8);
      let rm = temp % 8;
      finaldigit += rm * Math.pow(10, cnt);
      temp = qt;
      cnt++;
    }
  }
  console.log(finaldigit);
}
main(694, 8);
