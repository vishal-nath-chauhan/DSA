function inverseNumber(number) {
  let temp = number;
  let counter = 1;
  let inverseNumber = 0;
  let tempCount;
  let div;
  while (temp > 0) {
    console.log({ tempCount, div, inverseNumber, counter });
    console.log("loop");
    tempCount = temp % 10;
    div = 1;
    for (let i = 0; i < tempCount - 1; i++) {
      div = div * 10;
    }
    inverseNumber += counter * div;
    counter += 1;
    temp = parseInt(temp / 10);
  }
  console.log({ inverseNumber });
}

inverseNumber(21453);
