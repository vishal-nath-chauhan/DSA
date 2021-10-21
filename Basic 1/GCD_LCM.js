function findGCD(num1, num2) {
  let a = num1;
  let b = num2;

  let c = b;
  let gcd;
  while (c > 0) {
    c = b % a;
    if (c == 0) {
        gcd=a
      console.log("GCD ", a);
    }
    b = a;
    a = c;
  }
  console.log('LCM ',(num1*num2)/gcd)
}

findGCD(24, 36);
